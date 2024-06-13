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
    addedMsg: null,
    addedError: null,
    popup: false,
    addRecipe: {
      id: null,
      category: null,
      image: null,
      name: null,
      ingredient: null,
      instruction: null,
    },
    newRecipeDetail: null,
  }),
  getters: {},
  actions: {
    // Load All Recipes
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

    // set image for new Recipe
    uploadImage(e) {
      this.addRecipe.image = e.target.files[0];
    },

    // Send request to server to add new recipe in database
    async addNewRecipe() {
      this.addRecipe.id = Math.floor(Math.random() * 90000) + 10000
      // When you send data to server then You use formData()
      if (this.addRecipe.name && this.addRecipe.category && this.addRecipe.instruction && this.addRecipe.ingredient) {
        const formData = new FormData();
        formData.append("id", this.addRecipe.id);
        formData.append("name", this.addRecipe.name);
        formData.append("category", this.addRecipe.category);
        formData.append("instruction", this.addRecipe.instruction);
        formData.append("ingredients", this.addRecipe.ingredient);
        formData.append("image", this.addRecipe.image);

        await axios
          .post("http://localhost:8888/addRecipe", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            this.addedMsg = response.data.msg;
            this.popup = true
          })
          .catch((error) => {
            this.addedError = error.message;
          });
      } else {
        this.addedError = 'Something went Wrong'
      }
    },

    async viewNewRecipe() {
      const route = useRoute()
      let id = route.params.id
      console.log(id, 'idd')
      this.popup = false
      await axios
        .post("http://localhost:8888/recipeById", id)
        .then((response) => {
          this.newRecipeDetail = response.data
        })
        .catch((error) => {
          this.addedError = error.message;
        });
    },

    // Retrieve recipe by given name
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
            console.log(this.recipeByName, "chicken");
          }
          this.recipeByNameLoader = false;
        })
        .catch((err) => {
          console.log(err, "error");
        });
    },

    // Get Detail of selected recipe
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
