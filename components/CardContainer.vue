<script setup>
import ChefHat from "nvd-u/icons/ChefHat.vue";
import Navigation from "nvd-u/icons/Navigation.vue";
import CheckAll from "nvd-u/icons/CheckAll.vue";
import CalendarCheck from "nvd-u/icons/CalendarCheck.vue";
import CogBox from "nvd-u/icons/CogBox.vue";
import ShieldCheck from "nvd-u/icons/ShieldCheck.vue";
</script>

<template>
  <div class="card-container grid grid-cols-3 mt-10 gap-5">
    <Card
      title="Quality Content"
      desc="Enjoy high-quality content, including articles, videos, and blogs that inspire and inform."
    >
      <ShieldCheck class="text-4xl" />
    </Card>

    <Card
      title="Expert Tips and Techniques"
      desc="Learn from professional chefs and culinary experts to enhance your cooking skills."
    >
      <ChefHat class="text-4xl" />
    </Card>

    <Card
      title="User-Friendly Interface"
      desc="Easily navigate through our well-organized categories and search functions to find the perfect recipe."
    >
      <Navigation class="text-4xl" />
    </Card>

    <Card
      title="Step-by-Step Instructions"
      desc="Follow detailed, easy-to-understand recipes with step-by-step guidance and visuals."
    >
      <CheckAll class="text-4xl" />
    </Card>

    <Card
      title="Regular Updates"
      desc="Benefit from regularly updated content with new recipes and cooking tips to keep your culinary adventures fresh and exciting."
    >
      <CalendarCheck class="text-4xl" />
    </Card>

    <Card
      title="Interactive Features"
      desc="Utilize interactive features like meal planners, grocery lists, and cooking timers to streamline your kitchen activities."
    >
      <CogBox class="text-4xl" />
    </Card>
  </div>
</template>

<style></style>
