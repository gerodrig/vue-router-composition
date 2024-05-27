<template>
  <!-- component -->
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <!-- Left: Image -->
    <div class="hidden w-1/2 h-screen lg:block">
      <img
        src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="w-full p-8 lg:p-36 md:p-52 sm:20 lg:w-1/2">
      <RouterView />
    </div>
  </div>
</template>
