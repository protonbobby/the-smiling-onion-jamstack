<template>
  <div
    class="max-h-8 max-w-xs shadow transform transition duration-500 hover:scale-105"
  >
    <a :href="`blog/${post.slug}`" class="group">
      <img :src="post.featuredMedia" height="auto" aspect-ratio="16/9" />
      <!-- <div
        class="bg-cover bg-center"
        :style="`background-image: url(${post.featuredMedia}); height: 400px;`"
      ></div> -->
      <h3 class="p-2">
        <div class="text-center" v-html="post.title.rendered"></div>
      </h3>
      <div class="readmore slide flex justify-center flex-wrap mb-2">
        <span
          v-for="category in filterCategories(post.categories)"
          :key="category.short"
          class="tooltip px-2 mx-1 mb-1 inline-flex text-xs"
        >
          {{ category.short }}
          <span class="tooltip-text bg-blue-200 p-3 -mt-6 -ml-6 rounded">{{
            category.long
          }}</span>
        </span>
      </div>
    </a>
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
  z-index: 100;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
}

.readmore {
  display: inline-block;
  font-size: 9px;
  text-transform: uppercase;
  padding: 5px 15px;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  font-family: "Open Sans", serif;
  color: #fff;
  background: #fff;
  width: 100%;
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:hover:before {
    right: -1px;
  }
}
.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}
</style>
