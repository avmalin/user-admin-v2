<a href="/admin">admin</a>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
    export let form
	let files:any[]=[]

	//get files name from DB
	
	onMount(async () => {
		const response = await fetch('/api/files');
		const data = await response.json();
		if (data.result) {
			files = data.result;
			console.log(files);
			console.log(data.result);
		} else {
			console.error(data.error || 'Failed to fetch files');
		}
	});
	// upload valid
    let successMessage:string='';
	let errorMessage = '';
	let selectedFile: string | null = null;
	let fileInput: HTMLInputElement | null = null;

	const maxSize = 50 * 1024 * 1024; // 5MB

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement | null;
		if (input && input.files) {
			const file = input.files[0];
			if (file) {
				if (file.size > maxSize) {
					errorMessage = 'הקובץ גדול מדי. הגודל המרבי הוא 5MB.';
					fileInput = null;
				} else {
					errorMessage = ''; // the file is OK
				}
			}
		}
	}
	function canSubmit() {
		return !errorMessage;
	}
</script>

<h1>Welcome to SvelteKit</h1>
<form
	class="mx-auto mt-10 w-full max-w-md rounded-md bg-white p-6 shadow-md"
	method="post"
	use:enhance
	enctype="multipart/form-data"
>
	<div class="mb-4">
		<label for="upload-file" class="block text-sm font-medium text-gray-700">
			Select a file:
		</label>
		<input
			id="upload-file"
			name="fileToUpload"
			type="file"
			on:change={handleFileChange}
			bind:value={fileInput}
			required
			class="my-2 block w-full cursor-pointer rounded-lg border border-gray-400 bg-gray-50 text-sm focus:outline-none focus:ring focus:ring-blue-200"
		/>
		{#if errorMessage}
			<p class="text-red-600">{errorMessage}</p>
		{/if}
        {#if form?.error}
			<p class="mt-4 text-red-600">{form?.message}</p>
		{/if}
		{#if form?.success}
			<p class="mt-4 text-green-600">{form?.message}</p>
		{/if}

		<button
			type="submit"
			class="w-full rounded-lg bg-blue-600 px-4 py-2
   font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
		>
			Upload File
		</button>
	</div>
</form>

<h1 class="mb-4 text-2xl font-semibold">Available Files</h1>

<ul class="list-disc pl-5">
	{#if true}
		{#each files as file}
			<li class="mb-2">
				<a href={file.file.path} download={file} class="text-blue-600 hover:underline">
					{file.file.name}
				</a>
				<p> בעלים:{file.user.username} | תאריך העלה:{file.file.uploadedAt}</p>
			</li>
		{/each}
	{:else}
		<p>No files found.</p>
	{/if}
</ul>

