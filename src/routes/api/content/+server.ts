import prisma from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";
import { v4 as uuid } from "uuid";

export const POST = (async ({ url, request }) => {
  const body = await request.json();

  const created = await prisma.content.create({
    data: {
      body: body.content,
      url: uuid(),
    }
  });

  const newUrl = `${url.origin}/${created.url}`;

  console.log(created);

  return new Response(JSON.stringify({ url: newUrl }));
}) satisfies RequestHandler;