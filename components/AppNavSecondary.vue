<template>
  <nav class="sub-nav">
    <ul class="menu">
      <li>
        <nuxt-link to="/about">Breakfast</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Seasonal</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/recipeGuidelines">Cuisine</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pantry">Diet</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Type</nuxt-link>
      </li>
      <li>
        <input
          v-model="search"
          type="search"
          placeholder="I'm hungry for..."
          name="search"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      search: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
