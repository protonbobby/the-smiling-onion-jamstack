<template>
  <main class="post prose prose-lg max-w-prose">
    <div v-if="post">
      <h1 v-html="post.title.rendered" class="section-header"></h1>
      <div class="flex items-end justify-between">
        <div class="space-y-2">
          <diet-chips :diets="post.categories" />
          <small class="text-gray-500">{{ post.date | dateformat }}</small>
        </div>
        <social-media :title="post.title.rendered" :link-to-post="linkToPost" />
      </div>
      <img :src="post.featuredMedia" loading="lazy" class="rounded" />
      <section v-html="post.content.rendered" />
    </div>
    <div v-else>
      Something went wrong
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex"

import SocialMedia from "~/components/SocialMedia.vue"
import DietChips from "~/components/DietChips.vue"

export default {
  name: "Recipe",
  components: { SocialMedia, DietChips },
  computed: {
    ...mapGetters(["getPost"]),
    post() {
      return this.getPost(this.$route.params.slug)
    },
  },
  data() {
    return {
      //const siteURL = "https://confident-cray-495abf.netlify.app/"
      //linkToPost: `http://thesmilingonion.com${this.$route.fullPath}`,
      linkToPost: `https://confident-cray-495abf.netlify.app${this.$route.fullPath}`,
    }
  },
}
</script>

<style scoped>
main.post {
  margin: 60px auto 50px;
  padding: 0 30px 70px;
}

.section-header {
  font-family: "Sofia", sans-serif;
  @apply text-4xl text-gray-600;
}

/*Overrides WP class*/
::v-deep .gallery-item {
  @apply pr-2;
}
</style>
