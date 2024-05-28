<script setup></script>

<template>
  <nav>
    <div class="flex">
      <div class="w-[4%] ml-5">
        <img src="/public/logo.png" class="w-full rounded-full" alt="logo" />
      </div>
      <div class="all-center m-auto gap-x-16">
        <div>
          <NuxtLink to="/">
            <span
              class="text-xl text-gray-800 poppins-medium font-semibold overlay"
              >HOME</span
            >
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/about">
            <span
              class="text-xl text-gray-800 poppins-medium font-semibold overlay"
              >ABOUT</span
            >
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/contact">
            <span
              class="text-xl text-gray-800 poppins-medium font-semibold overlay"
              >CONTACT US</span
            >
          </NuxtLink>
        </div>

        <div>
          <NuxtLink to="/recipe">
            <span
              class="text-xl text-gray-800 poppins-medium font-semibold overlay"
              >RECIPES</span
            >
          </NuxtLink>
        </div>

        <div class="ml-60">
          <NuxtLink to="">
            <button
              class="border-2 border-[#3bc195] font-semibold text-gray-100 px-10 h-12 bg-[#3bc195] rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900 duration-700"
            >
              Sign Up | Sign In
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
