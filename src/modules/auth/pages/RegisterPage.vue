<template>
  <!-- Right: Login Form -->
  <h1 class="mb-4 text-2xl font-semibold">Sign up</h1>
  <form action="#" method="POST">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500"
        autocomplete="off"
      />
    </div>

    <!-- Email Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500"
        autocomplete="off"
      />
    </div>

    <!-- Confirm Password Input -->
    <div class="mb-4">
      <label for="confirmPassword" class="block text-gray-600">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500"
        autocomplete="off"
      />
    </div>

    <!-- Register Button -->
    <button
      type="submit"
      class="w-full px-4 py-2 font-semibold text-white rounded-md bg-emerald-500 hover:bg-emerald-600"
    >
      Signup
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-center text-emerald-500">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Login Here</RouterLink>
  </div>
</template>
