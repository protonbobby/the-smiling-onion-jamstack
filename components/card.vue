<template>
  <div class="group max-h-8 shadow max-w-xs hover:bg-pink-500 ">
    <a :href="`blog/${post.slug}`">
      <img :src="post.featuredMedia" height="auto" aspect-ratio="16/9" />
      <!-- <div
        class="bg-cover bg-center"
        :style="`background-image: url(${post.featuredMedia}); height: 400px;`"
      ></div> -->
      <h3 class="p-2">
        <div class="text-center" v-html="post.title.rendered"></div>
      </h3>
    </a>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    post: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
