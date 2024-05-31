<script setup>
const store = useRecipeStore();
</script>

<template>
  <div class="all-center flex-col w-full my-40">
    <h2 class="all-center text-2xl font-semibold">
      {{ store.selectedCategory }}
    </h2>
    <ULoading v-if="store.recipeByNameLoader" class="my-10" />
    <div class="font-sans font-semibold" v-show="!store.recipeByName">
      Your filtered recipes will appear here
    </div>

    <div class="card-container all-center flex-wrap">
      <div v-for="item in store?.recipeByName" :key="item?.idMeal">
        <div class="card w-[400px]">
          <img :src="item.strMealThumb" alt="img" class="w-full rounded-xl" />
          <h2 class="text-xl text-gray-800 font-semibold">
            {{ item?.strMeal }}
          </h2>
          <NuxtLink :to="`/recipe/${item?.idMeal}`">
            <button
              class="login-btn my-2 border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
            >
              Visit
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 660px) {
  .card {
    width: auto;
    margin-top: 20px;
  }
}
</style>
>
