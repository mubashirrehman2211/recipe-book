<script setup>
const store = useRecipeStore();

onMounted(() => {
  store.loadRecipes();
});
</script>

<template>
  <div class="bg-image w-screen h-[50vh] bg-cover bg-center bg-fixed">
    <Logo />

    <div class="all-center">
      <MainHeading title="Discover our Amazing Recipes !" />
    </div>
  </div>

  <RecipesIcon />

  <RecipesByCategory />

  <Footer />
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url("/public/recipe-1.jpg");
}

@media screen and (max-width: 660px) {
  .card {
    width: auto;
    margin-top: 20px;
  }
  .bg-image {
    height: 40vh;
  }
}

@media screen and (max-width: 330px) {
  .bg-image {
    height: 30vh;
  }
}
</style>
