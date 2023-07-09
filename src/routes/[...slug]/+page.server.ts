import type { PageServerLoad } from "./$types";
import prisma from "$lib/prisma";
import crypto from "crypto";
import { SECRET_KEY, SECRET_IV } from '$env/static/private';

export const load = (async ({ params, url, request }) => {
  const { slug } = params;

  // check if the user agent is a bot
  const isBot = request.headers.get('user-agent')?.includes('bot') ?? false;

  if (isBot) {
    return {
      status: 200,
    };
  }

  const foundSecret = await prisma.secret.findFirst({
    where: {
      url: {
        equals: slug
      }
    }
  });

  // eslint-disable-next-line
  const error = 'The requested secret may have expired or never existed. Make sure to double check the URL. Contact the sender for another link, if necessary.';

  if (!foundSecret) {
    return {
      error,
    };
  }

  // invalidate the secret after 15 minutes
  const isExpiredSecret = Date.now() - foundSecret.createdAt.getTime() > 15 * 60 * 1000;

  if (isExpiredSecret) {
    return {
      error,
    };
  }

  await prisma.secret.delete({
    where: {
      id: foundSecret.id
    }
  });

  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    SECRET_KEY,
    SECRET_IV,
  );

  let decrypted = decipher.update(foundSecret.body, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return {
    secret: {
      ...foundSecret,
      body: decrypted,
    }
  };
}) satisfies PageServerLoad;