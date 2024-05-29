<script setup>
const store = useRecipeStore();
</script>

<template>
  <header class="bg-image w-screen h-[90vh] bg-center bg-cover bg-fixed">
    <nav>
      <div class="flex">
        <div class="w-[5%] m-4">
          <img
            src="/public/logo-1.png"
            class="w-full rounded-full"
            alt="logo"
          />
        </div>
      </div>
    </nav>
    <div class="all-center flex-col mt-16">
      <h2 class="text-7xl text-gray-500 font-thin poppins-medium mb-1 edit-2">
        Experience the Difference with
        <span class="text-[#3bc195]">CookingBook.com</span>
      </h2>
      <h4 class="text-3xl my-2">A Recipe for Every Occasion</h4>
      <div class="mt-5">
        <NuxtLink to="">
          <button
            class="border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
          >
            Sign Up | Sign In
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
</style>
