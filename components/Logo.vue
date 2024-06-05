<script setup>
import ChefHat from "nvd-u/icons/ChefHat.vue";
import Menu from "nvd-u/icons/Menu.vue";

const store = useRecipeStore();
</script>

<template>
  <nav class="py-4">
    <button
      class="p-3"
      :class="{ 'absolute left-[230px] duration-300': store.sidebar }"
      @click="store.sidebar = !store.sidebar"
    >
      <Menu class="text-5xl text-[#3bc195]" />
    </button>
    <div class="flex text-center justify-around list-none"></div>
    <Transition name="slide-left">
      <div
        v-if="store.sidebar"
        class="sidebar absolute list-none left-0 top-0 w-[250px] h-screen rounded-b-md bg-gray-800 p-3 border-2 border-gray-800"
      >
        <div class="sidebar-content text-start flex flex-col gap-y-10">
          <li class="">
            <NuxtLink
              to="/"
              class="logo w-24 h-24 p-4 bg-gray-200 text-gray-800 all-center flex-col border-2 border-gray-200 rounded-full"
            >
              <ChefHat class="text-4xl icon" />
              <h2 class="mt-0 font-semibold">Cooking Book</h2>
            </NuxtLink>
          </li>
          <li
            class="border-b-2 w-full border-gray-600 line-clamp-3 hover:pl-5 duration-500"
          >
            <NuxtLink
              class="text-gray-300 text-xl poppins-medium font-semibold"
              to="/"
              >HOME</NuxtLink
            >
          </li>
          <li
            class="border-b-2 w-full border-gray-600 line-clamp-3 hover:pl-5 duration-500"
          >
            <NuxtLink
              class="text-gray-300 text-xl poppins-medium font-semibold"
              to="/recipe"
              >RECIPES</NuxtLink
            >
          </li>
          <li
            class="border-b-2 w-full border-gray-600 line-clamp-3 hover:pl-5 duration-500"
          >
            <NuxtLink
              class="text-gray-300 text-xl poppins-medium font-semibold"
              to="/createrecipes"
              >CREATE RECIPES</NuxtLink
            >
          </li>
          <li
            class="border-b-2 w-full border-gray-600 line-clamp-3 hover:pl-5 duration-500"
          >
            <NuxtLink
              class="text-gray-300 text-xl poppins-medium font-semibold"
              to="/about"
              >ABOUT US</NuxtLink
            >
          </li>
          <li
            class="border-b-2 w-full border-gray-600 line-clamp-3 hover:pl-5 duration-500"
          >
            <NuxtLink
              class="text-gray-300 text-xl poppins-medium font-semibold"
              to="/contact"
              >CONTACT US</NuxtLink
            >
          </li>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from {
  transform: translateX(-250px);
}

.slide-left-leave-to {
  transform: translateX(-250px);
}

@media screen and (max-width: 425px) {
  .logo {
    width: 60px;
    height: 60px;
    font-size: 0.5rem;
    padding: 0.5rem;
  }

  .icon {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 320px) {
  .logo {
    width: 50px;
    height: 50px;
    font-size: 0.3rem;
    padding: 3px;
  }

  .icon {
    font-size: 1rem;
  }
}
</style>
