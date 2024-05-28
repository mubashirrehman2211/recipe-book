<script setup>
import Facebook from "nvd-u/icons/Facebook.vue";
import Youtube from "nvd-u/icons/Youtube.vue";
import Instagram from "nvd-u/icons/Instagram.vue";
import Twitter from "nvd-u/icons/Twitter.vue";
</script>

<template>
  <div class="social-icons all-center flex-col mt-10">
    <h1
      class="text-2xl text-gray-100 font-semibold poppins-medium tracking-widest"
    >
      Get Social with us
    </h1>
    <ul class="all-center gap-5">
      <li
        class="text-3xl w-10 h-10 all-center border-2 border-[#0077b5] rounded-full bg-[#0077b5] text-white hover:scale-125 duration-500 cursor-pointer"
      >
        <Facebook />
      </li>

      <li
        class="text-3xl w-10 h-10 all-center border-2 border-white rounded-full bg-white text-red-600 hover:scale-125 duration-500 cursor-pointer"
      >
        <Youtube />
      </li>

      <li
        class="text-3xl w-10 h-10 all-center border-2 border-[#0077b5] rounded-full bg-[#0077b5] text-white hover:scale-125 duration-500 cursor-pointer"
      >
        <Twitter />
      </li>

      <li
        class="text-3xl w-10 h-10 all-center border-2 border-white rounded-full bg-white text-[#962fbf] hover:scale-125 duration-500 cursor-pointer"
      >
        <Instagram />
      </li>
    </ul>
  </div>
</template>

<style></style>
