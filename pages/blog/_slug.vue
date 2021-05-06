<template>
  <main class="post prose prose-lg max-w-prose">
    <h1 v-html="post.title.rendered" class="section-header"></h1>
    <div class="flex items-end justify-between">
      <div class="space-y-2">
        <diet-chips :post="post" />
        <small class="text-gray-500">{{ post.date | dateformat }}</small>
      </div>
      <social-media :title="post.title.rendered" :link-to-post="linkToPost" />
    </div>
    <img :src="post.featuredMedia" loading="lazy" class="rounded" />
    <section v-html="post.content.rendered" />
  </main>
</template>

<script>
import SocialMedia from "~/components/SocialMedia.vue"
import DietChips from "~/components/DietChips.vue"

export default {
  name: "Recipe",
  components: { SocialMedia, DietChips },
  computed: {
    post() {
      return this.$store.state.posts.find((el) => el.slug === this.slug)
    },
  },
  data() {
    return {
      slug: this.$route.params.slug,
      linkToPost: `http://thesmilingonion.com${this.$route.fullPath}`,
    }
  },
  //TODO: Add post.tags and post.categories
  created() {
    if (this.$store.state.posts.length === 0) {
      //TODO: Get invidual post!
      this.$store.dispatch("getPosts")
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
