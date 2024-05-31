<script setup>
const store = useRecipeStore();
</script>

<template>
  <header class="bg-image w-screen h-[90vh] bg-center bg-cover bg-fixed">
    <Logo />
    <div class="all-center flex-col mt-16">
      <MainHeading
        title="Welcome to"
        spanTitle="CookingBook.com"
        slogan="A Recipe for Every Occasion"
      />
      <div class="mt-5">
        <NuxtLink to="/recipe">
          <button
            class="login-btn border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
          >
            RECIPES
          </button>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url("/public/images/bg-3.jpg");
}

@media screen and (max-width: 950px) {
  .login-btn {
    padding: 0 1rem;
    height: 2rem;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 425px) {
  .login-btn {
    margin: 0.7rem 0;
    padding: 0 0.8rem;
    height: 1.7rem;
    font-size: 0.7rem;
  }
}
</style>
