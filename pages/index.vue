<script setup>
const store = useRecipeStore();
onMounted(() => {
  store.loadRecipes();
});
</script>

<template>
  <HeaderContent />

  <div class="all-center flex-col bg-gray-200 w-full">
    <h2
      class="h-title text-3xl mt-4 text-gray-600 m-auto font-semibold poppins-medium"
    >
      Why You Choose Cooking Book ?
    </h2>

    <CardContainer class="mb-5" />
  </div>

  <Satisfacttion />

  <DemoRecipes />

  <Footer />
</template>

<style scoped>
@media screen and (max-width: 425px) {
  .h-title {
    font-size: 1.7rem;
  }
}
</style>
