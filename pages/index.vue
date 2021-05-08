<template>
  <div class="parent">
    <section>
      <div class="text-lg text-center py-4 ">
        GLUTEN-FREE & VEGETARIAN RECIPES
      </div>
      <div class="p-8">
        <h2 class="text-2xl mb-2">Latest</h2>
        <!-- <div class="max-h-screen overflow-auto p-8 scroll-snap-y"> -->
        <!-- <div class="max-h-screen m-8 scroll-snap-center-align"> -->
        <!-- <div class="m-8 grid grid-flow-row grid-cols-12 scroll-snap-center-align"> -->
        <div class="grid grid-flow-row grid-cols-4 gap-6 col-span-12">
          <card
            class="shadow"
            v-for="post in sortedPosts"
            :post="post"
            :key="post.id"
          />
        </div>
      </div>
    </section>
    <section></section>
  </div>
  <!-- <hero-landing-page /> -->
  <!-- <filter-recipes /> -->
  <!-- <div class="section mx-8 space-y-10">
      <div>
        <h2 class="text-2xl mb-2">Recent Recipes</h2> -->

  <!-- Slider main container -->
  <!-- <div class="swiper-container"> -->
  <!-- <div class="swiper-pagination"></div> -->
  <!-- Additional required wrapper -->
  <!-- <div class="swiper-wrapper"> -->
  <!-- Slides -->
  <!-- <card-slide
              v-for="post in sortedPosts"
              :post="post"
              :key="post.id"
              class="swiper-slide"
            /> -->
  <!-- </div> -->
  <!-- If we need pagination -->

  <!-- If we need navigation buttons -->
  <!-- <div class="swiper-button-prev"></div> -->
  <!-- <div class="swiper-button-next"></div> -->
  <!-- </div> -->

  <!-- <div class="grid grid-flow-row grid-cols-4 gap-6">
          <card
            class="shadow max-w-xs"
            posts.filter
            v-for="post in sortedPosts"
            :post="post"
            :key="post.id"
          />
        </div> -->
  <!-- </div> -->

  <!-- <div> -->
  <!-- <h2 class="text-2xl mb-2">Twists on the Classics</h2> -->
  <!-- Slider main container -->
  <!-- <div class="swiper-container"> -->
  <!-- If we need pagination -->
  <!-- <div class="swiper-pagination"></div> -->
  <!-- Additional required wrapper -->
  <!-- <div class="swiper-wrapper"> -->
  <!-- Slides -->
  <!-- <card-slide
              v-for="post in sortedPosts"
              :post="post"
              :key="post.id"
              class="swiper-slide"
            />
          </div> -->
  <!-- If we need navigation buttons -->
  <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div> -->

  <!-- <app-footer /> -->
  <!-- </div> -->
  <!-- <aside class="col-span-0 ml-6 flex justify-center">
      <div class="flex items-center flex-col">
        <img
        loading="lazy"
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
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
import Swiper, { Navigation, Pagination } from "swiper"
import "swiper/swiper-bundle.css"

Swiper.use([Navigation, Pagination])

import card from "@/components/card.vue"
import FilterRecipes from "@/components/FilterRecipes.vue"
import dietGroups from "@/middleware/dietGroups"
import AppMasthead from "~/components/AppMasthead.vue"
import HeroLandingPage from "@/components/HeroLandingPage.vue"
import WavyDivider from "@/components/WavyDivider.vue"
import AppFooter from "@/components/AppFooter.vue"
import CardSlide from "@/components/CardSlide"

export default {
  components: {
    Swiper,
    CardSlide,
    FilterRecipes,
    HeroLandingPage,
    AppMasthead,
    WavyDivider,
    AppFooter,
    card,
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
    ...mapState(["posts", "tags"]),
    ...mapGetters(["getFilteredPosts"]),
    posts() {
      return this.posts.slice(0, 24)
    },
    tags() {
      return this.tags
    },
    sortedPosts() {
      return this.getFilteredPosts.slice(0, 4)
      // if (!this.selectedTag) return this.posts
      // return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
  created() {
    this.getPosts()
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 4,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  },
  methods: {
    ...mapActions(["getPosts"]),
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    },
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log("slide change")
    },
  },
}
</script>

<style lang="scss">
.swiper-container {
  width: calc(100vw - 4em);
  height: 9em;
}
h2 {
  text-transform: uppercase;
}
.parent {
  // style stuff

  // set height + overflow
  --scroll-gap: 2em;
  height: calc(100vh - 4em);
  overflow: auto;
  // padding: var(--scroll-gap);

  // set scroll snap 👇
  // scroll-snap-type: y;
}

.section {
  // set alignment 👇
  scroll-snap-align: center;

  // align content
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // set height
  height: calc(100vh - 4em);
}

// .scroll-snap-type-y {
//   scroll-snap-type: y;
//   overflow: auto;
//   height: calc(100vh - 4em);
// }

// .scroll-snap-align-center {
//   scroll-snap-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: calc(100vh - 4em);
// }

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

.child {
  // set alignment 👇
  scroll-snap-align: center;

  // align content
  display: flex;
  align-items: center;
  justify-content: center;

  // set height
  height: calc(100vh - 4em);

  // style stuff
  // border-radius: 0.4em;
  // padding: 1.25em;
  // box-shadow: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),
  //   0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12);

  // grid gap
  // &:not(:last-child) {
  //   margin-bottom: var(--scroll-gap);
  // }

  // style stuff
  &:nth-child(1) {
    background-color: hsl(358, 65%, 55%);

    h1 {
      color: hsl(165, 100%, 96%);
    }
  }

  &:nth-child(2) {
    background-color: hsl(183, 46%, 74%);

    h1 {
      color: hsl(96, 20%, 5%);
    }
  }

  &:nth-child(3) {
    background-color: hsl(206, 46%, 37%);

    h1 {
      color: hsl(165, 100%, 96%);
    }
  }

  &:nth-child(4) {
    background-color: hsl(216, 49%, 22%);

    h1 {
      color: hsl(165, 100%, 96%);
    }
  }
}
</style>
