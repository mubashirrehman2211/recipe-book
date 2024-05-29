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
      <h2 class="text-7xl text-gray-500 font-thin poppins-medium mb-3 edit-2">
        Experience the Difference with
        <span class="text-[#3bc195]">CookingBook.com</span>
        <h4 class="text-5xl mb-0 mt-1">A Recipe for Every Occasion</h4>
      </h2>
      <div class="mt-0">
        <NuxtLink to="">
          <button
            class="border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
          >
            Sign Up | Sign In
          </button>
        </NuxtLink>
      </div>
      <!-- <p
        class="max-w-[800px] mt-0 text-md text-gray-400 tracking-widest font-semibold text-left justify-start p-0"
      >
        Welcome to
        <NuxtLink class="text-[#4bd2a5] hover:text-[#3bc195]" to="/"
          ><span>RecipeBook.com</span></NuxtLink
        >, your ultimate destination for discovering and sharing the best
        recipes from around the world. Whether you're a seasoned chef or just
        starting your culinary journey, our extensive collection of recipes
        caters to all skill levels and tastes. From comforting classics to
        innovative dishes, we provide detailed instructions and expert tips to
        help you create delicious meals at home. Join our community and explore
        the endless possibilities that cooking has to offer. Happy cooking!
      </p> -->
    </div>
  </header>
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url("/public/images/bg-3.jpg");
}
</style>
