<script setup>
import Youtube from "nvd-u/icons/Youtube.vue";

const store = useRecipeStore();
</script>

<template>
  <div
    class="instruction all-center bg-gray-200 flex-col px-20 pt-20"
    v-for="r in store?.recipeDetail"
    :key="r"
  >
    <h2
      class="text-3xl text-start justify-start mb-2 text-gray-800 font-semibold"
    >
      Instructions
    </h2>
    <div class="ins-desc">
      <p class="font-serif mb-3 mt-0">{{ r?.strInstructions }}</p>
    </div>

    <!-- Youtube Link   -->

    <div
      v-for="r in store?.recipeDetail"
      :key="r"
      class="youtube-link my-20 text-start justify-start"
    >
      <a
        v-if="r?.strYoutube"
        :href="r?.strYoutube"
        class="text-[#3bc195] font-semibold all-center"
        target="_blank"
      >
        <Youtube class="text-red-600 text-3xl mr-2" />
        You can also watch Toturial on Youtube
      </a>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .instruction {
    padding-left: 10px;
    padding-right: 10px;
    text-align: left;
    justify-content: flex-start;
  }
  .ins-desc {
    width: 90%;
  }
}
</style>
