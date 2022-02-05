<template>
  <nav>
    <div class="sticky shadow h-60 top-0">
      <div class="p-1 flex justify-between  bg-pink-500 text-white">
        <input
          class="ml-8 w-60"
          type="search"
          placeholder="I'm hungry for..."
        />
        <div class="space-x-10 ">
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/browse">Recipes</nuxt-link>
          <nuxt-link to="/recipeGuidelines">Guidelines</nuxt-link>
          <nuxt-link to="/pantry">Pantry</nuxt-link>
          <nuxt-link to="/about">Contact</nuxt-link>
        </div>
      </div>
      <nuxt-link exact to="/"> </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<style lang="scss" scoped></style>
