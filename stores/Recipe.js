import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: null,
    sidebar: false,
    demoRecipes: null,
    recipeByName: null,
    selectedCategory: null,
    recipeId: null,
    recipeDetail: null,
    recipeByNameLoader: false,
    error: null,
    images: [],
    newRecipe: {
      category: null,
      name: null,
      ingredient: null,
      instruction: null,
    },
  }),
  getters: {},
  actions: {
    async loadRecipes() {
      await axios
        .get("https://nodeserver-sand.vercel.app/all")
        .then((response) => {
          this.recipes = response.data;
          this.demoRecipes = this.recipes?.slice(0, 6);
        })
        .catch((error) => {
          this.error = error.message;
          console.log("error", this.error);
        });
    },

    async selectRecipes(categoryName) {
      this.selectedCategory = categoryName;
      this.recipeByNameLoader = true;
      await axios
        .post("https://nodeserver-sand.vercel.app/categorywise-list", {
          category: categoryName,
        })
        .then((res) => {
          this.recipeByName = res.data.meals;
          localStorage.setItem("data", JSON.stringify(this.recipeByName));
          if (this.recipeByName?.length >= 10) {
            this.recipeByName = this.recipeByName.slice(0, 10);
          }
          this.recipeByNameLoader = false;
        })
        .catch((err) => {
          console.log(err, "error");
        });
    },

    async getRecipeDetail() {
      let route = useRoute();
      console.log(route.params.id, "route");
      this.recipeId = route.params.id;

      await axios
        .post("https://nodeserver-sand.vercel.app/details", {
          id: this.recipeId,
        })
        .then((res) => {
          this.recipeDetail = res.data;
        })
        .catch((err) => {
          console.log(err, "error");
        });
    },

    loadRelatedRecipes() {
      this.recipeByName = JSON.parse(localStorage.getItem("data"));
      if (this.recipeByName?.length >= 3) {
        this.recipeByName = this.recipeByName.slice(0, 3);
      } else {
        this.recipeByName;
      }
    },
  },
});
