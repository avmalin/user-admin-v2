<script>
	export let toggleSidebar;
	export let user;
</script>

<nav class="flex items-center justify-between bg-blue-500 p-4 text-white">
	<div class='flex  space-x-10'>
		<button
			class="flex h-5 w-7 cursor-pointer flex-col justify-between group me-5"
			on:click={toggleSidebar}
			aria-label="show sidebar"
		>
			<span
				class="block w-full h-1 bg-blue-600 group-hover:bg-blue-400 transition-transform duration-300 group-hover:translate-x-2 rounded-full"
			></span>
			<span
				class="block w-full h-1 bg-gray-800 transition-transform duration-300 group-hover:sc ale-75 rounded-full"
			></span>
			<span
				class="block w-full h-1 bg-gray-800 transition-transform duration-300 group-hover:-translate-x-2 rounded-full"
			></span>
		</button>
		{#if user}
			<p>ברוך הבא, {user.username}!</p>
			<button>LogOut</button>
		{:else}
			<a href="/login">Login</a>
		{/if}
	</div>
	<div class="text-xl font-bold">בס"ד</div>
</nav>
