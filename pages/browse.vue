<template>
  <div>
    <div
      class="bg-blue-200 w-full px-8 py-2 mb-4 sticky top-0 flex flex-wrap gap-2"
    >
      <button
        v-for="(diet, index) in diets"
        :key="index"
        :class="[
          'rounded-full bg-white p-1.5 text-xs border border-gray-300 lowercase text-gray-800 w-max text-center',
          {
            'border-pink-400 bg-pink-50': dietFilters[diet.id],
          },
        ]"
        @click="toggleDietFilter(diet.id)"
      >
        {{ diet.name }}
      </button>
    </div>

    <div
      class="
      px-8 
      py-4
      grid 
      grid-cols-1 
      gap-8 
      mb-8
      sm:grid-cols-2
      lg:grid-cols-4
    "
    >
      <card v-for="post in sortedPosts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"

import card from "@/components/card.vue"

export default {
  name: "Browse",
  components: {
    card,
  },
  data() {
    return {
      dietFilters: {
        0: true,
        15: false,
        16: false,
        18: false,
        19: false,
        77: false,
        101: false,
      },
      diets: [
        {
          name: "all recipes vegetarian & gluten-free",
          id: 0,
        },
        {
          name: "vegan",
          id: 16,
        },
        {
          name: "dairy-free",
          id: 15,
        },
        {
          name: "egg-free",
          id: 18,
        },
        {
          name: "peanut & tree nut-free",
          id: 19,
        },
        {
          name: "low fodmap",
          id: 77,
        },
        {
          name: "Grain-Free",
          id: 101,
        },
      ],
    }
  },
  computed: {
    ...mapState(["selectedCategories"]),
    ...mapGetters(["getFilteredPosts"]),
    sortedPosts() {
      return this.getFilteredPosts
      //this.getFilteredPosts.slice(0, 8)
      // if (!this.selectedTag) return this.posts
      // return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
    allDietsSelected() {
      return (
        this.dietFilters[15] &&
        this.dietFilters[16] &&
        this.dietFilters[18] &&
        this.dietFilters[19] &&
        this.dietFilters[77] &&
        this.dietFilters[101]
      )
    },
  },
  methods: {
    ...mapActions(["updateSelectedCategories"]),
    toggleDietFilter(id) {
      if (id === 0) {
        this.showAllRecipes()
      } else {
        this.dietFilters[id] = !this.dietFilters[id]

        if (this.allDietsSelected) {
          this.showAllRecipes()
          return
        }

        this.dietFilters[0] = false
        this.updateSelectedCategories(this.dietFilters)
      }
    },
    showAllRecipes() {
      for (let diet of Object.keys(this.dietFilters)) {
        this.dietFilters[diet] = false
      }
      this.dietFilters[0] = true
      this.updateSelectedCategories([])
    },
  },
}
</script>
