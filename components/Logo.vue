<script setup>
import ChefHat from "nvd-u/icons/ChefHat.vue";
</script>

<template>
  <nav class="mx-2">
    <NuxtLink
      to="/"
      class="logo w-24 h-24 p-4 bg-gray-200 text-gray-800 all-center flex-col border-2 border-gray-200 rounded-full"
    >
      <ChefHat class="text-4xl icon" />
      <h2 class="mt-0 font-semibold">Cooking Book</h2>
    </NuxtLink>
  </nav>
</template>

<style scoped>
@media screen and (max-width: 425px) {
  .logo {
    width: 75px;
    height: 75px;
    font-size: 0.5rem;
    padding: 1rem;
  }

  .icon {
    font-size: 1.5rem;
  }
}
</style>
