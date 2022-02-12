<template>
  <img
    :src="post.featuredMedia"
    :alt="post.title.rendered"
    loading="lazy"
    class="rounded object-cover object-center"
  />
</template>

<script>
export default {
  name: "oldcardslide",
  props: {
    post: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss"></style>
