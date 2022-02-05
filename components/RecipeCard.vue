<template>
  <div class="w-64 shadow rounded hover:ring-4 hover:ring-pink-300">
    <a :href="`blog/${post.slug}`">
      <img
        :src="post.featuredMedia"
        :alt="post.title.rendered"
        loading="lazy"
        class="h-80 rounded-t object-cover object-center"
      />
      <h3
        class="p-2 text-center text-lg font-medium"
        v-html="post.title.rendered"
      ></h3>
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
