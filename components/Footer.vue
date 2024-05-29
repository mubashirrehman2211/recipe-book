<script setup>
import Home from "nvd-u/icons/Home.vue";
import Email from "nvd-u/icons/Email.vue";
import Phone from "nvd-u/icons/Phone.vue";
import PhoneClassic from "nvd-u/icons/PhoneClassic.vue";

const store = useRecipeStore();
</script>

<template>
  <SocialIcons />

  <div class="bg-[#1d2331] p-10">
    <div class="flex text-start justify-evenly mr-40">
      <div class="all-center flex-col">
        <h2 class="text-xl text-gray-200 font-semibold poppins-medium mt-0">
          COOKING BOOK
        </h2>
        <p class="text-start justify-start text-[#757a7f] w-60 ml-24">
          A cooking book, commonly known as a cookbook, is a collection of
          recipes, instructions, and information about the preparation and
          cooking of various dishes.
        </p>
      </div>

      <div>
        <h2 class="text-xl text-gray-200 font-semibold poppins-medium">
          RECIPES
        </h2>
        <div class="mt-5">
          <div
            v-for="recipe in store?.demoRecipes"
            :key="recipe.id"
            class="text-lg font-semibold poppins-medium text-[#757a7f] hover:text-gray-200 duration-500 cursor-pointer"
          >
            {{ recipe?.strCategory }}
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl text-gray-200 font-semibold poppins-medium">
          USEFUL LINKS
        </h2>
        <div class="mt-5 text-lg font-semibold poppins-medium text-[#757a7f]">
          <div class="hover:text-gray-200 duration-500 cursor-pointer">
            Your Account
          </div>
          <div class="hover:text-gray-200 duration-500 cursor-pointer">
            Top-Rated Recipes
          </div>
          <div class="hover:text-gray-200 duration-500 cursor-pointer">
            Free Digital Recipes
          </div>
          <div class="hover:text-gray-200 duration-500 cursor-pointer">
            Help
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl text-gray-200 font-semibold poppins-medium">
          CONTACT
        </h2>
        <div class="mt-5">
          <div
            class="flex text-start text-lg font-semibold poppins-medium text-[#757a7f]"
          >
            <Home />
            <div class="ml-3">Islamabad,Pakistan</div>
          </div>
          <div class="flex text-lg font-semibold poppins-medium text-[#757a7f]">
            <Email />
            <div class="ml-3">info@example.com</div>
          </div>
          <div class="flex text-lg font-semibold poppins-medium text-[#757a7f]">
            <Phone />
            <div class="ml-3 text-start">+92 334 123 1454</div>
          </div>
          <div class="flex text-lg font-semibold poppins-medium text-[#757a7f]">
            <PhoneClassic />
            <div class="ml-3">+92 334 552 96</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
