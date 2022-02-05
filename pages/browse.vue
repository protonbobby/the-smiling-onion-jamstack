<template>
  <div>
    <div class="text-lg text-center py-4">
      GLUTEN-FREE & VEGETARIAN RECIPES
    </div>
    <div class="p-8">
      <!-- <div class="max-h-screen overflow-auto p-8 scroll-snap-y"> -->`
      <!-- <div class="max-h-screen m-8 scroll-snap-center-align"> -->
      <!-- <div class="m-8 grid grid-flow-row grid-cols-12 scroll-snap-center-align"> -->
      <div class="grid grid-flow-row grid-cols-4 gap-6 col-span-12">
        <!-- <div class="parent">
    <section class="child"><h1>One</h1></section>
    <section class="child"><h1>Two</h1></section>
    <section class="child"><h1>Three</h1></section>
    <section class="child"><h1>Four</h1></section>
  </div> -->
        <card
          class="shadow max-w-xs "
          v-for="post in sortedPosts"
          :post="post"
          :key="post.id"
        />
        <!-- </div> -->
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import card from "@/components/card.vue"

export default {
  name: "Browse",
  components: {
    card,
  },
  computed: {
    ...mapGetters(["getFilteredPosts"]),
    sortedPosts() {
      return this.getFilteredPosts.slice(0, 8)
      // if (!this.selectedTag) return this.posts
      // return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
}
</script>

<style lang="scss" scoped>
// .post {
//   max-width: 800px;
//   margin: 60px auto 50px;
//   padding: 0 30px 70px;
// }
// 💡 CSS Nugget: Understanding CSS Scroll Snap
// ℹ️ Customize the scrolling experience by setting points where the scroll position should move
// 🔗 https://codyhouse.co/nuggets/scroll-snap

.parent {
  // style stuff
  background-color: hsl(96, 10%, 11%);

  // set height + overflow
  --scroll-gap: 2em;
  height: calc(100vh - 4em);
  overflow: auto;
  // padding: var(--scroll-gap);

  // set scroll snap 👇
  scroll-snap-type: y;
}

.child {
  // set alignment 👇
  scroll-snap-align: center;

  // align content
  display: flex;
  align-items: center;
  justify-content: center;

  // set height
  height: calc(100vh - 4em);

  // style stuff
  // border-radius: 0.4em;
  // padding: 1.25em;
  // box-shadow: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),
  //   0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12);

  // grid gap
  // &:not(:last-child) {
  //   margin-bottom: var(--scroll-gap);
  // }

  // style stuff
  &:nth-child(1) {
    background-color: hsl(358, 65%, 55%);

    h1 {
      color: hsl(165, 100%, 96%);
    }
  }

  &:nth-child(2) {
    background-color: hsl(183, 46%, 74%);

    h1 {
      color: hsl(96, 20%, 5%);
    }
  }

  &:nth-child(3) {
    background-color: hsl(206, 46%, 37%);

    h1 {
      color: hsl(165, 100%, 96%);
    }
  }

  &:nth-child(4) {
    background-color: hsl(216, 49%, 22%);

    h1 {
      color: hsl(165, 100%, 96%);
    }
  }
}
</style>
