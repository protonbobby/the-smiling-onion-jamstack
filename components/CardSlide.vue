<template>
  <img
    :src="post.featuredMedia"
    :alt="post.title.rendered"
    loading="lazy"
    width="230"
    height="130"
    class="rounded object-cover object-center"
  />
</template>

<script>
export default {
  name: "CardSlide",
  props: {
    post: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss"></style>
