<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<main>
	<nav class="flex justify-between px-8 py-4 border">
		<div>
			<img src="./shield.png" alt="" width="48" />
		</div>
		<div class="flex flex-col justify-center">
			<ul class="flex space-x-10 font-semibold">
				<li>
					<a href="/">Product</a>
				</li>
				<li>
					<a href="/">Features</a>
				</li>
				<li>
					<a href="/">Pricing</a>
				</li>
			</ul>
		</div>
		<div class="flex flex-col justify-center font-semibold">
			<Button variant="ghost" class="text-base">Login</Button>
		</div>
	</nav>

	<article>
		<div class="mt-48 w-1/2 m-auto text-pretty">
			<h1 class="text-5xl font-bold text-center">Seamlessly create and share secrets</h1>
		</div>
	</article>
</main>
