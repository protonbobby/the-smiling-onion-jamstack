<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="flex items-center flex-col">
      <img
        src="@/assets/photos/alana-cup.png"
        alt="Some image"
        class="rounded-full h-56 w-56 object-cover object-center flex items-center justify-center shadow-inner"
      />
      <h2 class="italic mt-2 text-red-700 text-2xl">
        Hi, I'm Alana.
      </h2>
      <p class="text-gray-600">
        Thanks for checking out my collection of
        <span
          class="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
        >
          gluten-free & vegetarian
        </span>
        recipes (with many grain-free, vegan, and dairy-free options) inspired
        by the cuisines I like most :-)
      </p>
    </div>

    <!-- <h1 class="masthead text-6xl text-white font-bold mx-auto max-w-6xl">
      <span
        class="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
      >
        Vegetarian & Gluten-Free Recipes
      </span>
      <br />
    </h1> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: "VEGETARIAN AND GLUTEN-FREE COOKING",
    }
  },
}
</script>

//
<style lang="scss" scoped>
// @import "@/assets/mixins.scss"
// section.masthead {
//   width: 100%
//   height: 90vh
//   overflow: hidden
//   text-align: center
//   display: flex
//   justify-content: center
//   align-items: center
//   padding: 7vw
// background:
//     linear-gradient(
//       rgba(0, 0, 0, 0.5),
//       rgba(0, 0, 0, 0.5)
//     ),
//     url("/brussels-pizza.jpg") no-repeat center center scroll  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
//   background-size: cover
//   color: #333
//   h1 {
//     color: white
//     @include fluid-type(font-size, 320px, 1366px, 30px, 65px)
//   }
// }
//
</style>
