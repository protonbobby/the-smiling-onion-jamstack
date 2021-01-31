<template>
  <div class="flex items-center border border-gray-500 m-6 p-4">
    <smile-select
      v-model="selectedDiets"
      :items="categories"
      label="Diets"
      class="mr-6"
    ></smile-select>
    <smile-select
      v-model="selectedIngredients"
      :items="ingredients"
      label="Ingredients"
    ></smile-select>
    <button
      class="mx-6 border border-black p-1 rounded"
      name="Reset"
      @click="resetSelected"
    >
      Reset
    </button>
    <div>Results {{ searchResults }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "Vuex"
import SmileSelect from "./Select.vue"
import dietGroups from "@/middleware/dietGroups"

export default {
  name: "FilterRecipes",
  components: { SmileSelect },
  computed: {
    ...mapGetters(["searchResults"]),
    selectedDiets: {
      get() {
        this.$store.state.selectedCategories
      },
      set(selectedCategories) {
        this.$store.commit("updateSelectedCategories", selectedCategories)
      },
    },
    selectedIngredients: {
      get() {
        this.$store.state.selectedTags
      },
      set(selectedTags) {
        this.$store.commit("updateSelectedTags", selectedTags)
      },
    },
    categories() {
      return dietGroups
    },
    ingredients() {
      return this.$store.state.tags
    },
  },
  methods: {
    ...mapActions(["resetSelected"]),
  },
}
</script>

<style></style>
