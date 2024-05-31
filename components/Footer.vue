<script setup>
import Home from "nvd-u/icons/Home.vue";
import Email from "nvd-u/icons/Email.vue";
import Phone from "nvd-u/icons/Phone.vue";
import PhoneClassic from "nvd-u/icons/PhoneClassic.vue";

const store = useRecipeStore();

onMounted(() => {
  store.loadRecipes();
});
</script>

<template>
  <SocialIcons />

  <div class="footer-container bg-[#1d2331] p-10">
    <div class="footer flex text-start justify-evenly flex-wrap mr-40">
      <div class="all-center flex-col div-1">
        <Logo class="my-2" />
        <p class="main-desc text-start justify-start text-[#757a7f] w-60 ml-24">
          A cooking book, commonly known as a cookbook, is a collection of
          recipes, instructions, and information about the preparation and
          cooking of various dishes.
        </p>
      </div>

      <div class="div-2">
        <h2 class="text-xl text-gray-200 font-semibold poppins-medium">
          RECIPES
        </h2>
        <div class="mt-5">
          <NuxtLink to="/recipe">
            <div
              v-for="recipe in store?.demoRecipes"
              :key="recipe.id"
              class="text-lg font-semibold poppins-medium text-[#757a7f] hover:text-gray-200 duration-500 cursor-pointer"
              @click="store.selectRecipes(recipe?.strCategory)"
            >
              {{ recipe?.strCategory }}
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="useful-links div-3">
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

      <div class="div-4">
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

<style scoped>
@media screen and (max-width: 924px) {
  h2,
  div {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 1270px) {
  .footer-container {
    padding: 20px 0;
  }

  .footer {
    margin-right: 0;
  }

  .main-desc {
    width: auto;
    text-align: center;
    justify-content: center;
    word-wrap: break-word;
    margin: 0 10px;
  }

  .useful-links {
    display: none;
  }
}
</style>
