<template>
  <div
    class="
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
