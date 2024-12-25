<script lang='ts'>
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<h1 class="text-3xl font-bold text-center my-6">Login/Register</h1>

<form method="post" action="?/login" use:enhance class="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
  <!-- Username -->
  <div>
    <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
    <input 
      id="username" 
      name="username" 
      type="text" 
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-700"
      placeholder="Enter your name" 
      required 
    />
  </div>

  <!-- Password -->
  <div>
    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
    <input id="password" name="password" type="password" placeholder="password"required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-700"
       
    />
  </div>
  <!-- Buttons -->
  <div class="flex items-center justify-between">
    <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
	  >Login</button>

    <button type="submit" formaction="?/register" class="px-4 py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >Register</button>
  </div>
</form>

<!-- Error Message -->
<p class="mt-4 text-center text-red-500">{form?.message ?? ''}</p>
