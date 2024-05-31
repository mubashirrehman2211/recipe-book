<script setup>
defineProps(["title", "spanTitle", "slogan"]);
</script>

<template>
  <div>
    <h2
      class="heading text-7xl text-gray-500 font-thin poppins-medium mb-1 edit-2"
    >
      {{ title }}
      <span class="text-[#3bc195]">{{ spanTitle }}</span>
    </h2>
    <h4 class="slogan text-3xl my-2">{{ slogan }}</h4>
  </div>
</template>

<style scoped>
@media screen and (max-width: 950px) {
  .heading {
    font-size: 3.5rem;
  }
}

@media screen and (max-width: 765px) {
  .heading {
    font-size: 2.7rem;
  }
  .slogan {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 605px) {
  .heading {
    font-size: 2rem;
  }

  .slogan {
    font-size: 1.3rem;
  }
}

@media screen and (max-width: 425px) {
  .heading {
    font-size: 1.7rem;
  }

  .slogan {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 425px) {
  .heading {
    font-size: 1.4rem;
  }

  .slogan {
    font-size: 1rem;
  }
}
</style>
