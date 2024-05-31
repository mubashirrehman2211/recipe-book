<script setup>
const store = useRecipeStore();
</script>

<template>
  <div class="all-center">
    <h2 class="title text-3xl font-semibold text-gray-800">Filter by Image</h2>
  </div>
  <div class="all-center flex-wrap">
    <div class="all-center flex-wrap gap-10 p-2">
      <div
        v-for="recipe in store?.recipes"
        :key="recipe?.id"
        class="hover-effect w-20 cursor-pointer"
      >
        <button @click="store.selectRecipes(recipe?.strCategory)">
          <img
            :src="recipe?.strCategoryThumb"
            class="hover-effect w-full rounded-full hover:scale-125 duration-500 overflow-hidden"
            alt="recipe-img"
          />
          <h2 class="hover-effect font-semibold">
            {{ recipe?.strCategory }}
          </h2>
        </button>
      </div>
    </div>
    <ULoading v-if="!store?.recipes" />
  </div>
</template>

<style scoped>
.hover-effect:hover {
  color: #3bc195 !important;
}

@media screen and (max-width: 660px) {
  .card {
    width: auto;
    margin-top: 20px;
  }
}
</style>
