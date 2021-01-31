<template>
  <div>
    <filter-recipes />
    <div class="m-8 grid grid-flow-row grid-cols-12">
      <main class="grid grid-flow-row grid-cols-3 gap-6 col-span-12">
        <card
          class="shadow max-w-xs"
          v-for="post in sortedPosts"
          :post="post"
          :key="post.id"
        />
      </main>
      <!-- <aside class="col-span-0 ml-6 flex justify-center">
      <div class="flex items-center flex-col">
        <img
          src="@/assets/photos/alana-cup.png"
          alt="Some image"
          class="rounded-full h-56 w-56 object-cover object-center flex items-center justify-center shadow-lg"
        />
        <h2 class="italic mt-2 text-red-700 text-2xl">
          Hi, I'm Alana.
        </h2>
        <p class="text-sm">
          Thanks for checking out my collection of gluten-free and vegetarian
          recipes (with many grain-free, vegan, and dairy-free options) inspired
          by the cuisines I like most :-)
        </p>
      </div> -->
      <!-- <h2 class="tags-title">Categories</h2>
      <div class="tags-list">
        <ul>
          <li v-for="(cat, i) in categories" :key="i">
            <a>{{ cat.name }}</a>
          </li>
        </ul> -->
      <!-- <ul>
          <li
            @click="updateTag(tag)"
            v-for="tag in tags"
            :key="tag.id"
            :class="[tag.id === selectedTag ? activeClass : '']"
          >
            <a>{{ tag.name }}</a>
            <span v-if="tag.id === selectedTag">✕</span>
          </li>
        </ul> -->
      <!-- </div> -->
      <!-- </aside> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import card from "@/components/card.vue"
import FilterRecipes from "@/components/FilterRecipes.vue"
import dietGroups from "@/middleware/dietGroups"

export default {
  components: {
    card,
    FilterRecipes,
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active",
      perPage: 9,
      currentPage: 1,
      categories: dietGroups,
    }
  },
  computed: {
    ...mapGetters(["getFilteredPosts"]),
    posts() {
      return this.$store.state.posts.slice(0, 9)
    },
    tags() {
      return this.$store.state.tags
    },
    sortedPosts() {
      return this.getFilteredPosts.slice(0, 9)
      // if (!this.selectedTag) return this.posts
      // return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
  created() {
    this.$store.dispatch("getPosts")
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    },
  },
}
</script>

<style lang="scss">
// main {
//   grid-area: 1 / 1 / 2 / 2;
// }

// aside {
//   grid-area: 1 / 2 / 2 / 3;
// }

// a,
// a:active,
// a:visited {
//   text-decoration: none;
//   color: black;
// }

// a.readmore {
//   display: inline-block;
//   font-size: 11px;
//   text-transform: uppercase;
//   padding: 5px 15px;
//   letter-spacing: 2px;
//   position: relative;
//   color: #000;
//   font-weight: 700;
//   font-family: "Open Sans", serif;
//   border: 1px solid #ccc;
//   background: #fff;
// }

// .tags-title {
//   background-color: #000;
//   color: #fff;
//   border: none;
//   text-transform: capitalize;
//   letter-spacing: 0;
//   font-size: 1.2rem;
//   padding: 15px;
//   margin: 0 35px;
//   position: relative;
//   top: -25px;
// }

// .tags-list {
//   background: #f5f5f5;
//   padding: 70px 25px 25px;
//   margin-top: -65px;
// }

// .post {
//   border-bottom: 1px solid rgb(223, 222, 222);
//   margin-bottom: 2em;
// }

// .tags-list ul {
//   padding-left: 0;
// }

// .tags-list li {
//   font-family: "Open Sans", serif;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   padding: 6px 15px;
//   margin: 0 0 10px 10px;
//   display: inline-block;
//   font-size: 0.7rem !important;
//   border: 1px solid #000;
//   transition: all 0.3s;
//   outline: none;
//   font-weight: normal;
//   cursor: pointer;
//   background: #fff;
//   a {
//     color: #000;
//   }
// }

// .active {
//   border: 1px solid #d44119;
//   background-color: #fae091 !important;
// }

// .slide {
//   position: relative;
//   background: transparent;
//   -webkit-transition: 0.3s ease;
//   transition: 0.3s ease;
//   z-index: 1;
//   backface-visibility: hidden;
//   perspective: 1000px;
//   transform: translateZ(0);
//   cursor: pointer;

//   &:hover {
//     color: #fff;
//   }

//   &:hover:before {
//     right: -1px;
//   }
// }

// .slide::before {
//   content: "";
//   display: block;
//   position: absolute;
//   background: palevioletred;
//   transition: right 0.3s ease;
//   z-index: -1;
//   top: -2px;
//   bottom: -2px;
//   left: -2px;
//   right: 108%;
//   backface-visibility: hidden;
// }
</style>
