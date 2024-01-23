import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import prisma from '$lib/prisma';
import Google from '@auth/core/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle = SvelteKitAuth(async () => {
	const authOptions: SvelteKitAuthConfig = {
		adapter: PrismaAdapter(prisma),
		providers: [
			Google({
				clientId: GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE_CLIENT_SECRET
			})
		],
		trustHost: true,
		secret: AUTH_SECRET,
		pages: {
			signIn: '/login',
			signOut: '/login'
		},
		callbacks: {
			async session({ session }) {
				// session.user = {
				//   id: user.id,
				//   name: user.name,
				//   email: user.email,
				//   image: user.image
				// };

				return session;
			}
		}
	};

	return authOptions;
}) satisfies Handle;
