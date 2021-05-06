<template>
  <div
    class="rounded shadow-md flex flex-col justify-between hover:ring-4 hover:ring-pink-600 hover:ring-opacity-50 "
  >
    <a :href="`blog/${post.slug}`">
      <img
        :src="post.featuredMedia"
        :alt="post.title.rendered"
        width="720"
        loading="lazy"
        height="960"
        class="rounded-t object-cover object-center"
      />
      <div class="flex justify-center items-center flex-wrap px-4 h-16">
        <h3 class="text-center" v-html="post.title.rendered"></h3>
      </div>
    </a>
    <!-- <div class="text-center h-8">
      <hr
        class="border-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
      />

      <span
        v-for="category in filterCategories(post.categories)"
        :key="category.short"
        class="tooltip lowercase text-gray-600 text-xs p-1"
      >
        {{ category.short }}
        <span class="tooltip-text bg-blue-200 p-3 -mt-6 -ml-6 rounded">{{
          category.name
        }}</span>
      </span>
    </div> -->
  </div>
</template>

<script>
import dietGroups from "@/middleware/dietGroups"

export default {
  name: "CardSlide",
  props: {
    post: {
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

<style lang="scss">
.tooltip .tooltip-text {
  visibility: hidden;
  text-align: center;
  padding: 2px 6px;
  position: absolute;
  white-space: nowrap;
  z-index: 100;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
}
</style>
