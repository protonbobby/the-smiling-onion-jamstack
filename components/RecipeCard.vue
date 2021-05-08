<template>
  <div>
    <a :href="`blog/${post.slug}`">
      <img
        :src="post.featuredMedia"
        :alt="post.title.rendered"
        loading="lazy"
        height="960"
        width="720"
      />
      <div>
        <h3 v-html="post.title.rendered"></h3>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
