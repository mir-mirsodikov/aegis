import prisma from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";
import { v4 as uuid } from "uuid";
import crypto from "crypto";
import { SECRET_KEY, SECRET_IV } from '$env/static/private';

export const POST = (async ({ url, request }) => {
  const body = await request.json();

  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    SECRET_KEY,
    SECRET_IV,
  );

  let encrypted = cipher.update(body.content, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  const created = await prisma.secret.create({
    data: {
      body: encrypted,
      url: uuid(),
    }
  });

  const newUrl = `${url.origin}/${created.url}`;

  return new Response(JSON.stringify({ url: newUrl }));
}) satisfies RequestHandler;