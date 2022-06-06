<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="flex flex-col w-full h-screen overflow-hidden bg-green-50">
    <header class="w-full h-16 bg-green-500">
      <nav
        class="flex items-center justify-center w-full h-full text-center text-black"
      >
        <h2 class="text-2xl font-bold text-white">Nuxt 3 Boilerplate</h2>
      </nav>
    </header>
    <main
      class="flex flex-grow w-full h-full p-4 mx-auto max-w-7xl items-center justify-center"
    >
      <slot />
    </main>
    <footer class="flex items-center justify-center w-full h-16 text-black">
      <p class="text-gray-700">Nuxt App &copy; {{ currentYear }}</p>
    </footer>
  </div>
</template>
