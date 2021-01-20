<template>
  <div
    class="rounded w-full shadow transform transition duration-500 hover:scale-105 flex flex-col justify-between"
  >
    <a :href="`blog/${post.slug}`">
      <img
        :src="post.featuredMedia"
        :alt="post.title.rendered"
        class="rounded-t h-56 w-full object-cover object-center"
      />
      <div class="flex justify-center items-center flex-wrap px-4 h-16">
        <h3 class="text-center" v-html="post.title.rendered"></h3>
      </div>
    </a>
    <div class="text-center h-8">
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
          category.long
        }}</span>
      </span>
    </div>
  </div>
</template>

<script>
const categoriesMap = {
  0: {
    long: "Gluten-Free",
    short: "GF",
  },
  15: {
    long: "Dairy-Free",
    short: "DF",
  },
  16: {
    long: "Vegan",
    short: "V",
  },
  18: {
    long: "Egg-Free",
    short: "EF",
  },
  19: {
    long: "Peanut & Tree Nut-Free",
    short: "NF",
  },
  77: {
    long: "Low FODMAP",
    short: "LF",
  },
  101: {
    long: "Grain-Free",
    short: "GrF",
  },
}

export default {
  name: "card",
  props: {
    post: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    filterCategories(categories) {
      let filteredCategories = categories
        .filter((category) => categoriesMap[category])
        .map((category) => categoriesMap[category])
      filteredCategories.unshift(categoriesMap[0])
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
