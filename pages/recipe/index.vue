<script setup>
import ULoading from "nvd-u/components/ULoading.vue";
import ChefHat from "nvd-u/icons/ChefHat.vue";

const store = useRecipeStore();

onMounted(() => {
  store.loadRecipes();
});
</script>

<template>
  <div class="bg-image w-screen h-[50vh] bg-cover bg-center bg-fixed">
    <nav class="mx-2">
      <NuxtLink
        to="/"
        class="logo w-24 h-24 p-4 bg-gray-200 text-gray-800 all-center flex-col border-2 border-gray-200 rounded-full"
      >
        <ChefHat class="text-4xl icon" />
        <h2 class="mt-0 font-semibold">Cooking Book</h2>
      </NuxtLink>
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

  <div class="all-center flex-col w-full my-40">
    <h2 class="all-center text-2xl font-semibold">
      {{ store.selectedCategory }}
    </h2>
    <ULoading v-if="store.recipeByNameLoader" class="my-10" />
    <div class="font-sans font-semibold" v-show="!store.recipeByName">
      Your filtered recipes will appear here
    </div>

    <div class="card-container all-center flex-wrap">
      <div v-for="item in store?.recipeByName" :key="item?.id">
        <div class="card w-[400px]">
          <img :src="item.strMealThumb" alt="img" class="w-full rounded-xl" />
          <h2 class="text-xl text-gray-800 font-semibold">
            {{ item?.strMeal }}
          </h2>
          <NuxtLink to="/recipe">
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

@media screen and (max-width: 660px) {
  .card {
    width: auto;
    margin-top: 20px;
  }

  .heading {
    font-size: 1.7rem;
  }
  .bg-image {
    height: 40vh;
  }
}

@media screen and (max-width: 425px) {
  .logo {
    width: 60px;
    height: 60px;
    font-size: 0.5rem;
    padding: 0;
  }

  .icon {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 330px) {
  .heading {
    font-size: 1.3rem;
    margin-top: 50px;
  }

  .title {
    font-size: 1.3rem;
  }

  .bg-image {
    height: 30vh;
  }
}
</style>
