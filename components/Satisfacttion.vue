<script setup>
import ShieldCheckOutline from "./nvd-u/icons/ShieldCheckOutline.vue";
</script>

<template>
  <div class="all-center flex-col poppins-medium">
    <div class="my-40">
      <ShieldCheckOutline class="s-icon text-9xl text-[#3bc195]" />
      <h2
        class="s-title text-3xl mt-4 text-gray-600 m-auto font-semibold poppins-medium"
      >
        100% Satisfaction Guarantee
      </h2>
      <p
        class="s-desc w-[500px] text-gray-400 px-5 text-left text-balance mt-3 font-semibold"
      >
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
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .s-icon {
    font-size: 6rem;
    line-height: 1;
  }
  .s-title {
    font-size: 1.7rem;
    line-height: 1;
  }
  .s-desc {
    font-size: 0.9rem;
    max-width: 300px;
    margin: auto;
    text-align: justify;
  }
}
</style>
