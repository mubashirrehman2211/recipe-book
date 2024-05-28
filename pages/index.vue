<script setup>
import Navbar from "~/components/Navbar.vue";

const store = useRecipeStore();
onMounted(() => {
  store.loadRecipes();
});
</script>

<template>
  <Navbar />

  <HeaderContent />
</template>

<style scoped></style>
