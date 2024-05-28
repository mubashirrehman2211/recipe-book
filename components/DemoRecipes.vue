<script setup>
const store = useRecipeStore();
</script>

<template>
  <div class="text-center justify-center mt-[200px]">
    <h2 class="text-gray-900 text-4xl font-semibold poppins-medium">Recipes</h2>
    <div class="grid grid-cols-3 gap-10 place-items-center">
      <div v-for="card in store?.demoRecipes" :key="card">
        <div
          class="border-2 rounded-md shadow-md all-center flex-col w-full h-[400px] p-4 overflow-hidden"
        >
          <div class="">
            <img
              :src="card?.strCategoryThumb"
              class="hover:scale-110 overflow-hidden duration-500"
              alt="card-image"
            />
          </div>
          <div class="mt-2 all-center">
            <h2 class="text-2xl font-semibold poppins-medium">
              {{ card?.strCategory }}
            </h2>
          </div>
          <div class="my-3 all-center">
            <NuxtLink to="">
              <button
                class="border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
              >
                CHECK RECIPES
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="my-10 all-center">
    <NuxtLink to="/recipes">
      <button
        class="border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
      >
        VIEW MORE
      </button>
    </NuxtLink>
  </div>
</template>

<style></style>
