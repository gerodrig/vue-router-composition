<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Welcome to Gerar Corporation</h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>Counter: {{ counter }}</p>
    <button
      @click="counter++"
      class="px-4 py-2 mt-4 text-white rounded-md bg-emerald-500 hover:bg-emerald-600"
    >
      Increment + 1
    </button>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
