<template>
  <div class="about">
    <h2>Pantry</h2>
    <div v-html="page.content.rendered"></div>
  </div>
</template>

<script>
import pagesIndex from "./wpPages.js"
export default {
  name: "Pantry",
  created() {
    this.$store.dispatch("getPage", "pantry")
  },
  computed: {
    page() {
      return this.$store.state.pages[pagesIndex["pantry"]]
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  margin: 30px auto 50px;
  max-width: 800px;
  padding: 50px 50px 70px;
  background: white;
}

p {
  margin: 15px 0 20px;
}
</style>
