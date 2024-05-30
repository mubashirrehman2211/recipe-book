<script setup>
const store = useRecipeStore();
</script>

<template>
  <div class="bg-gray-200 py-10">
    <h2
      class="h-title text-4xl text-gray-600 all-center font-semibold poppins-medium"
    >
      Here Some Recipes
    </h2>
    <div class="cards" v-if="store?.demoRecipes">
      <div class="flex flex-wrap text-center items-center justify-center">
        <div
          v-for="recipe in store?.demoRecipes"
          :key="recipe.id"
          class="card w-[400px] p-3 all-center flex-col"
        >
          <img
            :src="recipe?.strCategoryThumb"
            class="w-[30%] hover:scale-125 overflow-hidden duration-500"
            alt="card-img"
          />
          <h2 class="text-2xl text-gray-500 poppins-medium">
            {{ recipe?.strCategory }}
          </h2>
          <div class="my-3 all-center">
            <NuxtLink to="/recipes">
              <button
                class="border-2 border-[#3bc195] font-semibold text-gray-100 px-3 h-10 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
              >
                Check Out
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="my-10 all-center">
      <NuxtLink to="/recipe">
        <button
          class="view-btn border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
        >
          VIEW MORE
        </button>
      </NuxtLink>
    </div>

    <ULoading v-if="!store?.demoRecipes" class="my-[200px]" />
  </div>
</template>

<style scoped>
@media screen and (max-width: 325px) {
  .h-title {
    font-size: 1.5rem;
  }
  .view-btn {
    text-align: center;
    justify-content: center;
    font-size: 0.8rem;
    height: 2.6rem;
    padding-left: 50px;
  }
}
</style>
