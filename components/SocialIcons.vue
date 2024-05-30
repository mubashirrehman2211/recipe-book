<script setup>
import Facebook from "nvd-u/icons/Facebook.vue";
import Youtube from "nvd-u/icons/Youtube.vue";
import Instagram from "nvd-u/icons/Instagram.vue";
import Twitter from "nvd-u/icons/Twitter.vue";
</script>

<template>
  <div
    class="border-2 border-[#33a17c] bg-[#33a17c] text-gray-200 text-center flex justify-around"
  >
    <p class="mr-60 head">Get connected with us on social networks!</p>
    <div class="all-center gap-5 icons">
      <Facebook
        class="text-xl cursor-pointer hover:scale-150 overflow-hidden duration-500"
      />
      <Youtube
        class="text-xl cursor-pointer hover:scale-150 overflow-hidden duration-500"
      />
      <Twitter
        class="text-xl cursor-pointer hover:scale-150 overflow-hidden duration-500"
      />
      <Instagram
        class="text-xl cursor-pointer hover:scale-150 overflow-hidden duration-500"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 650px) {
  .head {
    display: none;
  }

  .icons {
    padding: 10px 0;
    text-align: center;
    justify-content: center;
  }
}
</style>
