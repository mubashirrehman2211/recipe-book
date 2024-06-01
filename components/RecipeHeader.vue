<script setup>
const store = useRecipeStore();
</script>

<template>
  <header class="bg-image w-screen h-[50vh] bg-center bg-cover bg-fixed">
    <Logo />
    <div class="all-center">
      <MainHeading
        title="From our Kitchen to Yours"
        slogan="Lets Start Cooking !"
        class="my-10"
      />
    </div>
  </header>

  <div
    v-for="r in store?.recipeDetail"
    :key="r"
    class="all-center flex-col bg-gray-200"
  >
    <h2
      class="text-2xl text-start justify-start text-gray-800 mt-5 font-semibold"
    >
      {{ r?.strMeal }}
    </h2>
    <h2
      class="text-xl text-start justify-start text-gray-800 mb-5 mt-3 font-semibold"
    >
      ({{ r?.strCategory }})
    </h2>

    <div>
      <img
        :src="r?.strMealThumb"
        class="rounded-2xl mb-20"
        alt="recipe-image"
      />
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url("/public/recipes.jpg");
}
</style>
