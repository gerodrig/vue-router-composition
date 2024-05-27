<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center px-4 border-b border-gray-300 h-14 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="flex items-center h-10 ml-auto space-x-4 sm:space-x-6">
        <div class="space-x-4 sm:space-x-6">
          <RouterLink
            exact-active-class="font-semibold underline text-emerald-500"
            :to="{ name: 'home' }"
          >
            Home
          </RouterLink>
          <RouterLink
            exact-active-class="font-semibold underline text-emerald-500"
            :to="{ name: 'features' }"
          >
            Features
          </RouterLink>
          <RouterLink exact-active-class="font-semibold underline text-emerald-500" to="/pricing">
            Pricing
          </RouterLink>
          <RouterLink exact-active-class="font-semibold underline text-emerald-500" to="/contact">
            Contact
          </RouterLink>
        </div>
        <div class="space-x-4 sm:space-x-6">
          <RouterLink
            :hidden="!isAuthenticated"
            exact-active-class="font-semibold underline text-emerald-500"
            class="mr-2"
            :to="`/pokemon/${pokemonId}`"
          >
            Pokemons
          </RouterLink>
          |
          <RouterLink v-if="!isAuthenticated" to="/auth"> Login </RouterLink>
          <RouterLink v-if="isAuthenticated" @click="logout" to="/"> Logout </RouterLink>
        </div>
      </nav>
    </header>
    <!-- End Header -->

    <!-- Main -->
    <main class="flex items-center justify-center flex-1">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <!-- End Main -->

    <!-- Footer -->
    <footer class="flex items-center px-4 border-t border-gray-300 h-14 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-center text-gray-500">
        © {{ new Date().getFullYear() }} Gerar Corporation. All rights reserved.
      </p>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();

const isAuthenticated = computed(() => !!localStorage.getItem('userId'));
const pokemonId = localStorage.getItem('pokemonId') ?? 1;

const logout = () => {
  localStorage.removeItem('userId');
  router.replace('/');
};
</script>
