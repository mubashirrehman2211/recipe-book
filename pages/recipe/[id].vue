<script setup>
import Youtube from "nvd-u/icons/Youtube.vue";

const store = useRecipeStore();

onMounted(() => {
  store.getRecipeDetail();
  // store.loadRelatedRecipes();
});
</script>

<template>
  <header class="bg-image w-screen h-[50vh] bg-center bg-cover bg-fixed">
    <Logo />
    <div class="all-center">
      <MainHeading
        title="From our Kitchen to Yours"
        slogan="Lets Start Cooking !"
        class="my-20"
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
  <!-- Ingredients Table -->

  <IngredientTable />

  <!-- Instruction -->

  <div
    class="instruction all-center bg-gray-200 flex-col px-20 pt-20"
    v-for="r in store?.recipeDetail"
    :key="r"
  >
    <h2 class="text-3xl text-start justify-start text-gray-800 font-semibold">
      Instructions
    </h2>
    <div>
      <p class="font-serif mt-3">{{ r?.strInstructions }}</p>
    </div>

    <!-- Youtube Link   -->

    <div
      v-for="r in store?.recipeDetail"
      :key="r"
      class="youtube-link my-20 text-start justify-start"
    >
      <a
        v-if="r?.strYoutube"
        :href="r?.strYoutube"
        class="text-[#3bc195] font-semibold all-center"
        target="_blank"
      >
        <Youtube class="text-red-600 text-3xl mr-2" />
        You can also watch Toturial on Youtube
      </a>
    </div>
  </div>

  <!-- Related Card -->
  <!-- <div class="py-10">
    <div class="my-10">
      <h2 class="all-center my-3 text-3xl text-gray-800 font-semibold">
        Related
      </h2>
      <div class="related all-center flex-wrap">
        <div v-for="item in store?.recipeByName" :key="item?.idMeal">
          <div class="card w-[400px] mb-20">
            <img :src="item.strMealThumb" alt="img" class="w-full rounded-xl" />
            <h2 class="text-xl my-3 text-gray-800 font-semibold">
              {{ item?.strMeal }}
            </h2>
            <NuxtLink :to="`/recipe/${item?.idMeal}`">
              <button
                class="login-btn my-3 border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
              >
                Visit
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <Footer v-if="store.recipeDetail" />
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url("/public/recipes.jpg");
}

@media screen and (max-width: 660px) {
  .card {
    width: auto;
    margin-top: 20px;
  }
}
</style>
