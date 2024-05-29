<script setup>
import ShieldCheckOutline from "./nvd-u/icons/ShieldCheckOutline.vue";
const store = useRecipeStore();
onMounted(() => {
  store.loadRecipes();
});
</script>

<template>
  <HeaderContent />

  <div class="all-center flex-col bg-gray-200 w-full">
    <h2 class="text-3xl mt-4 text-gray-600 m-auto font-semibold poppins-medium">
      Why You Choose Cooking Book ?
    </h2>

    <CardContainer class="mb-5" />
  </div>

  <div class="all-center flex-col poppins-medium">
    <div class="my-40">
      <ShieldCheckOutline class="text-9xl text-[#3bc195]" />
      <h2
        class="text-3xl mt-4 text-gray-600 m-auto font-semibold poppins-medium"
      >
        100% Satisfaction Guarantee
      </h2>
      <p class="w-[500px] text-left text-balance mt-3 font-semibold">
        At CookingBook.com, your satisfaction is our top priority. We guarantee
        that every recipe, tip, and tool you find on our platform is designed to
        enhance your culinary journey. If for any reason you're not satisfied
        with your experience, simply let us know, and we'll do everything we can
        to make it right. Your satisfaction is our commitment, ensuring that
        every visit to CookingBook.com leaves you inspired, informed, and
        excited to create delicious meals. Cook with confidence, satisfaction
        guaranteed, only at CookingBook.com.
      </p>
    </div>
  </div>

  <DemoRecipes />


</template>

<style scoped></style>
