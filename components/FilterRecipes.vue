<template>
  <div>
    <div
      class="flex-col justify-center border border-gray-400 rounded-md m-6 p-4 flex-auto flex space-x-3 shadow"
    >
      <div class="flex items-end spaxe-x-3">
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

        <smile-button text="reset" />

        <div>Results {{ searchResults }}</div>
      </div>
      <div class="flex justify-center items-center">
        <smile-chip
          v-for="diet in selectedCategories"
          :key="diet.id"
          :text="diet.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "Vuex"
import SmileSelect from "./SmileSelect.vue"
import SmileButton from "./SmileButton"
import SmileChip from "./SmileChip"
import Diets from "./Diets.vue"
import dietGroups from "@/middleware/dietGroups"

export default {
  name: "FilterRecipes",
  components: { SmileSelect, SmileButton, SmileChip, Diets },
  computed: {
    ...mapState(["selectedCategories"]),
    ...mapGetters(["searchResults"]),
    selectedDiets: {
      get() {
        this.selectedCategories
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
