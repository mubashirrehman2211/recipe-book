<script setup>
defineProps(["title", "desc"]);
</script>

<template>
  <div class="card p-4 w-[400px]">
    <slot />
    <h2 class="text-xl text-gray-500 poppins-medium">{{ title }}</h2>
    <p class="text-sm text-gray-500 poppins-medium">
      {{ desc }}
    </p>
  </div>
</template>

<style scoped>
@media screen and (max-width: 400px) {
  .card {
    width: 300px;
  }
}
</style>
