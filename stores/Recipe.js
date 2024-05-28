import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: null,
    demoRecipes: null,
    error: null,
  }),
  getters: {},
  actions: {
    loadRecipes() {
      axios
        .get("https://nodeserver-sand.vercel.app/all")
        .then((response) => {
          this.recipes = response.data;
          this.demoRecipes = this.recipes?.slice(0, 6);
          console.log("recipes", this.recipes);
        })
        .catch((error) => {
          this.error = error.message;
          console.log("error", this.error);
        });
    },
  },
});
