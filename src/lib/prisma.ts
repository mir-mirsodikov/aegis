import { PrismaClient } from '@prisma/client';

import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from '$env/static/private';

import { dev } from '$app/environment';

let adapter: PrismaLibSQL | null = null;

if (!dev) {
	const libsql = createClient({
		url: TURSO_DATABASE_URL,
		authToken: TURSO_AUTH_TOKEN
	});

	adapter = new PrismaLibSQL(libsql);
}

const prisma = new PrismaClient({ adapter });
export default prisma;
