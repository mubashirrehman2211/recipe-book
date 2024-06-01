<script setup>
const store = useRecipeStore();
</script>
<template>
  <RecipeHeader />

  <!-- Ingredients Table -->

  <IngredientTable />
  <ULoading v-if="!store.recipeDetail" />

  <!-- Instruction -->

  <Instruction />
  <!-- Related Card -->

  <RelatedRecipes />

  <Footer v-if="store.recipeDetail" />
</template>

<style></style>
