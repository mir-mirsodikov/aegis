<script lang="ts">
	type ButtonType = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'empty';

	export let type: ButtonType = 'primary';
	export let onClick: () => void = () => {};
	// allow children of html elements

	const classes = {
		primary: 'bg-blue-600 hover:bg-blue-700 text-white',
		secondary: 'border hover:bg-gray-100 text-black',
		danger: 'bg-red-600 hover:bg-red-700 text-white',
		warning: 'bg-yellow-600 hover:bg-yellow-700',
		success: 'bg-green-600 hover:bg-green-700',
		empty: ''
	};

	const classList = `py-4 px-6 rounded-md transition duration-300 ease-in-out ${classes[type]}`;
</script>

<button class={classList} on:click={onClick}>
	<slot>
		<p>Button</p>
	</slot>
</button>
