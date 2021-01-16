<template>
  <div class="nav">
    <ul class="menu">
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Simple & Easy</nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/">
          <div class="header-container">
            <app-icon></app-icon>
            <span class="header">
              The Smiling Onion
            </span>
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">By Cuisine</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">By Diet</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">By Type</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue"

export default {
  components: {
    AppIcon,
  },
}
</script>

<style lang="scss" scoped>
.nav {
  background: #fff;
  color: palevioletred;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 8px 16px -8px rgba(113, 113, 133, 0.16);
  padding: 1em 100px;
  position: sticky;
  top: 0;
  transition: transform 0.3s;
  z-index: 10;

  a {
    color: black;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      color: palevioletred;
    }
  }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}

.header {
  font-size: 2rem;
  color: palevioletred;
}

// .find-recipes {
//   display: flex;
//   flex-direction: column;
//   padding: 4px;
//   border: 1px solid black;
// }
</style>
