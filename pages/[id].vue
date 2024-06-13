<script setup>
const store = useRecipeStore();

onMounted(() => {
  store.viewNewRecipe();
});
</script>
<template>
  <div>{{ store.newRecipeDetail }}</div>
</template>

<style></style>
