<script setup>
const store = useRecipeStore();

onMounted(() => {
  store.getRecipeDetail();
  store.loadRelatedRecipes();
});
</script>

<template>
  <RecipeDetail />
</template>

<style scoped>


</style>
