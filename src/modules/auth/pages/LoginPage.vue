<template>
  <!-- Right: Login Form -->
  <h1 class="mb-4 text-2xl font-semibold">Login</h1>
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
    <!-- Remember Me Checkbox -->
    <div class="flex items-center mb-4">
      <input type="checkbox" id="remember" name="remember" class="text-emerald-500" />
      <label for="remember" class="ml-2 text-gray-600">Remember Me</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-emerald-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button
      @click="onLogin"
      type="button"
      class="w-full px-4 py-2 font-semibold text-white rounded-md bg-emerald-500 hover:bg-emerald-600"
    >
      Login
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-center text-emerald-500">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onLogin = () => {
  localStorage.setItem('userId', 'ABC-123');

  const lastPath = localStorage.getItem('lastPath') ?? '/';

  router.replace(lastPath);
};
</script>
