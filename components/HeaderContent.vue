<script setup></script>

<template>
  <div class="border-2 border-[#3bc195] bg-[#3bc195]">
    <ul class="all-center gap-20 text-gray-200 mt-2.5">
      <li>what to eat</li>
      <li>what to drink</li>
      <li>search recipes</li>
    </ul>
  </div>
  <div class="bg-image w-screen h-[80vh] bg-center bg-cover bg-fixed">
    <div class="all-center flex-col mt-40">
      <h2 class="text-3xl text-gray-100 poppins-medium mb-2 edit-2">
        Welcome to <span>RecipeBook.com</span>
      </h2>
      <p
        class="max-w-[600px] mt-0 text-md text-gray-300 tracking-widest font-semibold text-center justify-center p-0"
      >
        Welcome to
        <NuxtLink class="text-[#3bc195] hover:text-[#3bc195]" to="/"
          ><span>RecipeBook.com</span></NuxtLink
        >, your ultimate destination for discovering and sharing the best
        recipes from around the world. Whether you're a seasoned chef or just
        starting your culinary journey, our extensive collection of recipes
        caters to all skill levels and tastes. From comforting classics to
        innovative dishes, we provide detailed instructions and expert tips to
        help you create delicious meals at home. Join our community and explore
        the endless possibilities that cooking has to offer. Happy cooking!
      </p>
    </div>

    <SocialIcons />
  </div>
</template>

<style scoped>
.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("/public/images/bg-3.jpg");
  position: absolute;
}
</style>
