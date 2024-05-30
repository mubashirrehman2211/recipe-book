<script setup>
import ULoading from "nvd-u/components/ULoading.vue";
import axios from "axios";

const store = useRecipeStore();

function selectRecipes(categoryName) {
  console.log("name", categoryName);
  axios
    .get("https://nodeserver-sand.vercel.app/categorywise-list", categoryName)
    .then((res) => {
      console.log(res.data, "category");
    })
    .catch((err) => {
      console.log(err, "error");
    });
}

onMounted(() => {
  store.loadRecipes();
});
</script>

<template>
  <div class="bg-image w-screen h-[50vh] bg-cover bg-center bg-fixed">
    <nav>
      <div class="flex">
        <div class="w-[5%] m-4">
          <img
            src="/public/logo-1.png"
            class="w-full rounded-full"
            alt="logo"
          />
        </div>
      </div>
    </nav>

    <div class="all-center">
      <h2
        class="heading text-5xl text-gray-200 font-semibold poppins-medium edit-2"
      >
        Discover Our Amazing Recipes !
      </h2>
    </div>
  </div>
  <div class="all-center">
    <h2 class="text-3xl font-semibold text-gray-800">Filter by Image</h2>
  </div>
  <div class="all-center flex-wrap">
    <div class="all-center flex-wrap gap-10 p-2">
      <div
        v-for="recipe in store?.recipes"
        :key="recipe?.id"
        class="hover-effect w-20 cursor-pointer"
      >
        <button @click="selectRecipes(recipe?.strCategory)">
          <img
            :src="recipe.strCategoryThumb"
            class="hover-effect w-full rounded-full hover:scale-125 duration-500 overflow-hidden"
            alt="recipe-img"
          />
          <h2 class="hover-effect font-semibold">
            {{ recipe.strCategory }}
          </h2>
        </button>
      </div>
    </div>
    <ULoading v-if="!store?.recipes" />
  </div>

  <div class="all-center w-full my-40">
    <div class="font-sans font-semibold">
      Category wise data will appear here inshallah
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url("/public/recipe-1.jpg");
}

.hover-effect:hover {
  color: #3bc195 !important;
}
</style>
