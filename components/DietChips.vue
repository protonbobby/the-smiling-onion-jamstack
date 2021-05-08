<template>
  <div class="space-x-2">
    <span
      v-for="category in filterCategories(diets)"
      :key="category.short"
      class="lowercase text-gray-600 text-xs p-1.5 rounded-full bg-yellow-400"
    >
      {{ category.name }}
    </span>
  </div>
</template>

<script>
import dietGroups from "@/middleware/dietGroups"

export default {
  props: {
    diets: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      categoriesMap: dietGroups,
    }
  },
  methods: {
    filterCategories(categories) {
      let filteredCategories = categories
        .filter((category) => this.categoriesMap[category])
        .map((category) => this.categoriesMap[category])
      filteredCategories.unshift(this.categoriesMap[0])
      return filteredCategories
    },
  },
}
</script>
