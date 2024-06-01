<script setup>
const store = useRecipeStore();
</script>

<template>
  <div class="all-center flex-col my-20 w-full">
    <div v-for="r in store?.recipeDetail" :key="r">
      <h2 class="text-3xl text-gray-800 my-5 font-semibold">ingredients</h2>

      <div
        class="table mt-0 all-center mb-20 border-2 border-gray-300 p-2 e rounded shadow-sm"
      >
        <table class="poppins-medium">
          <tr class="border-2 rounded bg-gray-200">
            <th>INGREDIENTS</th>
            <th>MEASURE</th>
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
  </div>
</template>

<style></style>
