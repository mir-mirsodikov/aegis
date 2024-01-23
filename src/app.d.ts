// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// import type { Session } from '@auth/sveltekit/node_modules/@auth/core/types';
import type { Session as AuthSession } from '@auth/core/types';

declare global {
	namespace App {
		interface Session extends AuthSession {}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
