<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="border-2 border-[#3bc195] bg-[#3bc195]">
    <ul class="all-center gap-20 text-gray-200 mt-2.5">
      <li>what to eat</li>
      <li>what to drink</li>
      <li>search recipes</li>
    </ul>
  </div>
  <div class="bg-image w-screen h-[80vh] bg-center bg-cover bg-fixed">
    <div class="all-center flex-col">
      <h2 class="text-3xl text-gray-300 poppins-medium">
        Welcome to <span>RecipeBook.com</span>
      </h2>
      <h4 class="text-xl text-gray-400 mt-0 oppins-regular">
        Find Your Recipes
      </h4>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("/public/images/bg-3.jpg");
  position: absolute;
}
</style>
