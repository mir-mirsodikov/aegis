<script lang="ts">
	let content: string = '';
	let generatedUrl: string = '';

	const create = async () => {
		const res = await fetch('/api/content', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ content })
		});

		const data = await res.json();

		generatedUrl = data.url;
	};

	const copy = () => {
		navigator.clipboard.writeText(generatedUrl);
	};
</script>

<main class="flex justify-center">
	{#if generatedUrl !== ''}
		<div class="bg-white p-4 lg:w-1/2 md:w-3/4 w-full rounded-lg shadow-xl m-4">
			<p>Share your secret with this link:</p>
			<div class="flex items-center justify-center my-4">
				<div class="bg-gray-100 px-4 rounded-md mr-2">
					<p class="text-sm dark:text-white text-center my-4 text-gray-700">
						{generatedUrl}
					</p>
				</div>
				<button on:click={copy}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 hover:stroke-blue-600 hover:cursor-pointer"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
						/>
					</svg>
				</button>
			</div>
		</div>
	{:else}
		<div class="bg-white p-4 lg:w-1/2 md:w-3/4 w-full rounded-lg shadow-xl m-4">
			<h1 class="text-center py-4 text-2xl font-semibold">Secret Creation</h1>
			<form action="">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Create new secret</label
				>
				<textarea
					id="message"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Write your secret here..."
					bind:value={content}
				/>
				<div class="flex flex-row-reverse">
					<button
						class="px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg mt-4 text-white"
						on:click={create}>Create</button
					>
				</div>
			</form>
		</div>
	{/if}
</main>
