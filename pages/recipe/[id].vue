<script setup>
import Youtube from "nvd-u/icons/Youtube.vue";

const store = useRecipeStore();

onMounted(() => {
  store.getRecipeDetail();
  // store.recipeByName = store.recipeByName.slice(0, 3);
});
</script>

<template>
  <!-- <pre>{{ store.recipeDetail }}</pre> -->
  <header class="bg-image w-screen h-[50vh] bg-center bg-cover bg-fixed">
    <Logo />
    <div class="all-center">
      <MainHeading
        title="From our Kitchen to Yours"
        slogan="Lets Start Cooking !"
      />
    </div>
  </header>

  <div v-for="r in store?.recipeDetail" :key="r" class="w-[800px] m-auto">
    <h2
      class="text-2xl text-start justify-start text-gray-800 my-5 font-semibold"
    >
      {{ r?.strMeal }}
    </h2>
    <h2
      class="text-xl text-start justify-start text-gray-800 my-5 font-semibold"
    >
      ({{ r?.strCategory }})
    </h2>

    <div>
      <img :src="r?.strMealThumb" class="rounded-2xl" alt="recipe-image" />
    </div>

    <div class="my-20">
      <h2
        class="text-3xl text-start justify-start text-gray-800 my-5 font-semibold"
      >
        ingredients :
      </h2>

      <div class="table mt-0 all-center">
        <table class="poppins-medium">
          <tr class="border-2">
            <th>ingredients</th>
            <th>Measure</th>
          </tr>
          <tr v-if="r?.strIngredient1">
            <td>{{ r?.strIngredient1 }}</td>
            <td>{{ r?.strMeasure1 }}</td>
          </tr>
          <tr v-if="r?.strIngredient2">
            <td>{{ r?.strIngredient2 }}</td>
            <td>{{ r?.strMeasure2 }}</td>
          </tr>
          <tr v-if="r?.strIngredient3">
            <td>{{ r?.strIngredient3 }}</td>
            <td>{{ r?.strMeasure3 }}</td>
          </tr>
          <tr v-if="r?.strIngredient4">
            <td>{{ r?.strIngredient4 }}</td>
            <td>{{ r?.strMeasure4 }}</td>
          </tr>
          <tr v-if="r?.strIngredient5">
            <td>{{ r?.strIngredient5 }}</td>
            <td>{{ r?.strMeasure5 }}</td>
          </tr>
          <tr v-if="r?.strIngredient6">
            <td>{{ r?.strIngredient6 }}</td>
            <td>{{ r?.strMeasure6 }}</td>
          </tr>
          <tr v-if="r?.strIngredient7">
            <td>{{ r?.strIngredient7 }}</td>
            <td>{{ r?.strMeasure7 }}</td>
          </tr>
          <tr v-if="r?.strIngredient8">
            <td>{{ r?.strIngredient8 }}</td>
            <td>{{ r?.strMeasure8 }}</td>
          </tr>
          <tr v-if="r?.strIngredient9">
            <td>{{ r?.strIngredient9 }}</td>
            <td>{{ r?.strMeasure9 }}</td>
          </tr>
          <tr v-if="r?.strIngredient10">
            <td>{{ r?.strIngredient10 }}</td>
            <td>{{ r?.strMeasure10 }}</td>
          </tr>
          <tr v-if="r?.strIngredient11">
            <td>{{ r?.strIngredient11 }}</td>
            <td>{{ r?.strMeasure11 }}</td>
          </tr>
          <tr v-if="r?.strIngredient12">
            <td>{{ r?.strIngredient12 }}</td>
            <td>{{ r?.strMeasure12 }}</td>
          </tr>
          <tr v-if="r?.strIngredient13">
            <td>{{ r?.strIngredient13 }}</td>
            <td>{{ r?.strMeasure13 }}</td>
          </tr>
          <tr v-if="r?.strIngredient14">
            <td>{{ r?.strIngredient14 }}</td>
            <td>{{ r?.strMeasure14 }}</td>
          </tr>
          <tr v-if="r?.strIngredient15">
            <td>{{ r?.strIngredient15 }}</td>
            <td>{{ r?.strMeasure15 }}</td>
          </tr>
          <tr v-if="r?.strIngredient16">
            <td>{{ r?.strIngredient16 }}</td>
            <td>{{ r?.strMeasure16 }}</td>
          </tr>
          <tr v-if="r?.strIngredient17">
            <td>{{ r?.strIngredient17 }}</td>
            <td>{{ r?.strMeasure17 }}</td>
          </tr>
          <tr v-if="r?.strIngredient18">
            <td>{{ r?.strIngredient18 }}</td>
            <td>{{ r?.strMeasure18 }}</td>
          </tr>
          <tr v-if="r?.strIngredient19">
            <td>{{ r?.strIngredient19 }}</td>
            <td>{{ r?.strMeasure19 }}</td>
          </tr>
          <tr v-if="r?.strIngredient20">
            <td>{{ r?.strIngredient20 }}</td>
            <td>{{ r?.strMeasure20 }}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="instruction">
      <h2
        class="text-3xl text-start justify-start text-gray-800 mt-5 font-semibold"
      >
        Instructions :
      </h2>
      <div>
        <p>{{ r?.strInstructions }}</p>
      </div>
    </div>

    <div
      v-if="r?.strYoutube"
      class="youtube-link my-20 text-start justify-start"
    >
      <a
        :href="r?.strYoutube"
        class="text-[#3bc195] font-semibold all-center"
        target="_blank"
      >
        <Youtube class="text-red-600 text-3xl mr-2" />
        You can also watch Toturial on Youtube
      </a>
    </div>

    <div class="related">
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
  </div>

  <Footer v-if="store.recipeDetail" />
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url("/public/recipes.jpg");
}
</style>
