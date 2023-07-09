<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const copy = () => {
		if (data.secret) {
			navigator.clipboard.writeText(data.secret.body);
		}
	};
</script>

<main class="flex justify-center mt-36">
	<div class="bg-white p-4 md:w-5/6 lg:w-3/4 w-full rounded-lg shadow-xl m-4 md:m-0">
		<h2 class="text-center text-3xl font-semibold mb-4">Retrieved Secret</h2>
		{#if data.secret}
			<p class="mb-4">
				This is a one time viewing of the secret. Make sure to save it elsewhere to persist it. You
				will not be able to see this again.
			</p>
			<div class="bg-gray-100 p-4 rounded-md">
				<p bind:innerText={data.secret.body} contenteditable="false" />
			</div>
			<button
				class="bg-blue-600 py-4 px-6 rounded-md text-white hover:bg-blue-700 mt-2 mx-auto block"
				on:click={copy}>Copy</button
			>
		{:else}
			<p class="text-center">{data.error}</p>

			<div class="flex justify-center space-x-2">
				<a
					href="/"
					class="bg-blue-600 py-4 px-6 rounded-md text-white hover:bg-blue-700 mt-2 transition duration-300 ease-in-out"
					>Generate new secret</a
				>
			</div>
		{/if}
	</div>
</main>
