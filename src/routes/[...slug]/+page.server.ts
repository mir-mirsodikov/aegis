import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/prisma";

export const load = (async ({ params }) => {
  const { slug } = params;

  const foundSecret = await prisma.content.findFirst({
    where: {
      url: {
        equals: slug
      }
    }
  });

  if (foundSecret) {
    await prisma.content.update({
      where: {
        id: foundSecret.id
      },
      data: {
        viewed: true,
      }
    });

    if (foundSecret.viewed) {
      return {
        error: 'This secret has expired.'
      };
    }

    return {
      secret: foundSecret
    };
  }

  throw error(404, 'Page not found');
}) satisfies PageServerLoad;