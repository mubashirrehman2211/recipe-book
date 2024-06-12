<script setup>
import ChefHat from "nvd-u/icons/ChefHat.vue";
import Menu from "nvd-u/icons/Menu.vue";

const store = useRecipeStore();
</script>

<template>
  <nav class="py-4">
    <li class="list-none">
      <NuxtLink
        to="/"
        class="logo w-24 h-24 p-4 bg-gray-200 text-gray-800 all-center flex-col border-2 border-gray-200 rounded-full"
      >
        <ChefHat class="text-4xl icon" />
        <h2 class="mt-0 font-semibold">Cooking Book</h2>
      </NuxtLink>
    </li>
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
