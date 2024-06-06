<script setup>
import UFileUpload from "nvd-u/components/UFileUpload.vue";

const store = useRecipeStore();
</script>

<template>
  <header class="bg-image w-screen h-[50vh] bg-center bg-cover bg-fixed">
    <Logo />
    <div class="all-center">
      <MainHeading title="Create Your Own Recipe" />
    </div>
  </header>

  <div class="all-center flex-col mb-20">
    <h2 class="text-3xl text-gray-800 my-16 font-semibold">Create Recipes</h2>
    <form class="card border-2 p-10 w-[500px]">
      <div class="flex flex-col text-start justify-start my-3">
        <label class="my-2 text-[#3bc195] text-xl poppins-medium"
          >Category Name</label
        >
        <input
          v-model="store.newRecipe.category"
          type="text"
          placeholder="ex. Beef, Chicken"
          class="pr-5 pl-2 py-2 focus:outline-[#3bc195] border-2 rounded"
        />
      </div>
      <div class="flex flex-col text-start justify-start my-3">
        <label class="my-2 text-[#3bc195] text-xl poppins-medium"
          >Recipe Name</label
        >
        <input
          v-model="store.newRecipe.name"
          type="text"
          placeholder="Enter Recipe Name"
          class="pr-5 pl-2 py-2 focus:outline-[#3bc195] border-2 rounded"
        />
      </div>
      <!-- <div class="flex flex-col text-start justify-start my-3">
        <UFileUpload :files="store.images" accept="image/*" :max="1" />
      </div> -->
      <div class="flex flex-col text-start justify-start my-3">
        <label class="my-2 text-[#3bc195] text-xl poppins-medium"
          >Ingredients</label
        >
        <textarea
          class="pr-5 pl-2 py-2 focus:outline-[#3bc195] border-2 rounded"
          id="Ingredients"
          cols="30"
          rows="10"
          placeholder="ex. Salt : 2 Spoon"
          v-model="store.newRecipe.ingredient"
        ></textarea>
      </div>
      <div class="flex flex-col text-start justify-start my-3">
        <label class="my-2 text-[#3bc195] text-xl poppins-medium"
          >Instruction</label
        >
        <textarea
          v-model="store.newRecipe.instruction"
          class="pr-5 pl-2 py-2 focus:outline-[#3bc195] border-2 rounded"
          id="Instruction"
          cols="30"
          placeholder="Enter instruction about Recipe"
          rows="10"
        ></textarea>
      </div>

      <button
        class="login-btn my-3 border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
      >
        Add Recipe
      </button>
    </form>
  </div>

  <Footer />
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
