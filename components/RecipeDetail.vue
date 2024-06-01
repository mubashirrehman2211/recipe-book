<script setup>
const store = useRecipeStore();
</script>
<template>
  <RecipeHeader />

  <ULoading v-if="!store.recipeDetail" />
  <!-- Ingredients Table -->

  <IngredientTable />

  <!-- Instruction -->

  <Instruction />
  <!-- Related Card -->

  <RelatedRecipes />

  <Footer v-if="store.recipeDetail" />
</template>

<style></style>
