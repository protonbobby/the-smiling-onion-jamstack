<template>
  <div class="section">
    <div class="p-8 grid grid-cols-2">
      <div class="col-span-1 p-4 flex-column items-center space-y-4">
        <div class="text-center">
          <span class="block text-5xl px-4">All Recipes Are</span>
          <span
            class="block text-5xl px-4 pb-1 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
            >Gluten-Free & Vegetarian</span
          >
        </div>
        <div class="p-4 flex justify-between items-center border">
          <div class="text-xl">
            Never miss a new recipe!
          </div>
          <smile-button text="Subscribe" />
        </div>
      </div>

      <div class="col-span-1 p-4 space-y-4">
        <img
          :src="latestPost.featuredMedia"
          :alt="latestPost.title.rendered"
          loading="lazy"
          class="rounded h-80 w-full object-cover object-center"
        />
        <h3
          class="text-2xl text-center"
          v-html="latestPost.title.rendered"
        ></h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import card from "./card"
import SmileButton from "./SmileButton.vue"

export default {
  components: { card, SmileButton },
  computed: {
    ...mapGetters(["getLatestPosts"]),
    latestPost() {
      return this.getLatestPosts
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  // set alignment 👇
  scroll-snap-align: center;

  // align content
  display: flex;
  align-items: center;
  justify-content: center;

  // set height
  height: calc(100vh - 4em);
}
</style>
