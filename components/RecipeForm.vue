<script setup>
import UButton from "nvd-u/components/UButton.vue";
import CheckCircle from "nvd-u/icons/CheckCircle.vue";
const store = useRecipeStore();
</script>

<template>
  <h1
    class="all-center h-title text-3xl mt-4 text-gray-600 m-auto font-semibold poppins-medium"
  >
    You Can Create Your Own Recipe
  </h1>
  <div class="all-center flex-col mb-20">
    <h2 class="text-3xl text-gray-800 my-16 font-semibold">Create Recipes</h2>
    <div class="card border-2 p-10 w-[500px]">
      <div class="flex flex-col text-start justify-start my-3">
        <label class="my-2 text-[#3bc195] text-xl poppins-medium"
          >Category Name</label
        >

        <input
          v-model="store.addRecipe.category"
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
          v-model="store.addRecipe.name"
          type="text"
          placeholder="Enter Recipe Name"
          class="pr-5 pl-2 py-2 focus:outline-[#3bc195] border-2 rounded"
        />
      </div>
      <form
        action="/addRecipe"
        method="post"
        enctype="multipart/form-data"
        class="flex flex-col text-start justify-start my-3"
      >
        <label class="my-2 text-[#3bc195] text-xl poppins-medium">Image</label>
        <input type="file" name="image" v-on:change="store.uploadImage" />
      </form>
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
          v-model="store.addRecipe.ingredient"
        ></textarea>
      </div>
      <div class="flex flex-col text-start justify-start my-3">
        <label class="my-2 text-[#3bc195] text-xl poppins-medium"
          >Instruction</label
        >
        <textarea
          v-model="store.addRecipe.instruction"
          :class="{ ' focus:outline-red-600': !store.addRecipe.instruction }"
          class="pr-5 pl-2 py-2 focus:outline-[#3bc195] border-2 rounded"
          id="Instruction"
          cols="30"
          placeholder="Enter instruction about Recipe"
          rows="10"
        ></textarea>
      </div>
      <div v-if="store.addedError" class="text-red-500 font-semibold">
        {{ store.addedError }}
      </div>
      <div class="all-center">
        <UButton
          class="login-btn my-3 font-semibold rounded hover:bg-gray-200 hover:border-gray-200"
          @click="store.addNewRecipe()"
        >
          Add Recipe
        </UButton>
      </div>
      <MainLoader v-if="store.popup">
        <div class="all-center flex-col w-[300px] bg-white rounded-xl p-2">
          <CheckCircle class="text-[#3bc195] animate-bounce duration-500" />
          <h2 class="text-2xl">
            {{ store.addedMsg }}
          </h2>

          <UButton class="login-btn py-3" @click="store.viewNewRecipe">
            <NuxtLink :to="`/${store.addRecipe?.id}`" class="text-gray-100"
              >View Recipe</NuxtLink
            >
          </UButton>
          <UButton
            class="login-btn py-3 mt-4"
            @click="() => (store.popup = false)"
            >OK</UButton
          >
        </div>
      </MainLoader>
    </div>
  </div>
</template>

<style scoped>
.login-btn {
  border: 2px solid #3bc195 !important;
  background: #3bc195 !important;
  color: #fefefe;
}
</style>
