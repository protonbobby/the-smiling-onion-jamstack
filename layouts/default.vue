<template>
  <div>
    <app-nav />
    <!-- <app-nav-secondary /> -->
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue"
import AppFooter from "@/components/AppFooter.vue"
import AppNavSecondary from "~/components/AppNavSecondary.vue"

export default {
  components: {
    AppNav,
    AppFooter,
    AppNavSecondary,
  },
}
</script>

<style>
html {
  font-family: "Poppins", sans-serif;
  /* font-size: 1rem; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #fff;
}
/* 
h2,
h3 {
  font-family: "Roboto Slab", serif;
} */

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}
/* 
h1 {
  margin-bottom: 30px;
  text-align: center;
} */

section img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}
</style>
