<script setup>
const store = useRecipeStore();
</script>

<template>
  <header class="bg-image w-screen h-[90vh] bg-center bg-cover bg-fixed">
    <Logo />
    <div class="all-center flex-col mt-16">
      <h2
        class="heading text-7xl text-gray-500 font-thin poppins-medium mb-1 edit-2"
      >
        Welcome to
        <span class="text-[#3bc195]">CookingBook.com</span>
      </h2>
      <h4 class="slogan text-3xl my-2">A Recipe for Every Occasion</h4>
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
  .heading {
    font-size: 3.5rem;
  }
  .login-btn {
    padding: 0 1rem;
    height: 2rem;
    font-size: 0.8rem;
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

  .login-btn {
    margin: 0.7rem 0;
    padding: 0 0.8rem;
    height: 1.7rem;
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 425px) {
  .heading {
    font-size: 1.4rem;
  }

  .slogan {
    font-size: 1rem;
  }

  .logo {
    width: 75px;
    height: 75px;
    font-size: 0.5rem;
    padding: 1rem;
  }

  .icon {
    font-size: 1.5rem;
  }
}
</style>
