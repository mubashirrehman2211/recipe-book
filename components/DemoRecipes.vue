<script setup>
const store = useRecipeStore();
</script>

<template>
  <div class="bg-gray-200 py-10">
    <h2 class="text-4xl text-gray-600 all-center font-semibold poppins-medium">
      Here Some Recipes
    </h2>
    <div class="grid grid-cols-3 ml-[16%] w-[71%]" v-if="store?.demoRecipes">
      <div
        v-for="recipe in store?.demoRecipes"
        :key="recipe.id"
        class="bg-yellow-500 w-0 m-0"
      >
        <div
          class="card px-3 w-[400px] min-h-[350px] all-center flex-col relative mx-0"
        >
          <img
            :src="recipe?.strCategoryThumb"
            class="w-[30%] hover:scale-125 overflow-hidden duration-500"
            alt="card-img"
          />
          <h2 class="text-2xl text-gray-500 poppins-medium">
            {{ recipe?.strCategory }}
          </h2>
          <p
            class="text-sm text-left justify-start text-gray-400 poppins-medium max-h-10 w-[70%] text-ellipsis overflow-hidden"
          >
            {{ recipe?.strCategoryDescription }}
          </p>
          <div class="absolute bottom-0 my-3 all-center">
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
          class="border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
        >
          VIEW MORE
        </button>
      </NuxtLink>
    </div>

    <ULoading v-if="!store?.demoRecipes" class="my-[200px]" />
  </div>
</template>

<style scoped></style>
