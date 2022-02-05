<template>
  <headroom>
    <nav class="bg-white shadow sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-12">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <nuxt-link exact to="/">
                <div class="flex justify-center width-auto align-center">
                  <app-icon></app-icon>
                  <span class="header">
                    The Smiling Onion
                  </span>
                </div>
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-10">
                <nuxt-link
                  class="font-medium text-gray-700 py-5 hover:text-gray-900 border-b-2 border-transparent hover:border-pink-500 w-24 text-center"
                  to="/about"
                  >About</nuxt-link
                >
                <nuxt-link
                  class="font-medium text-gray-700 py-5 hover:text-gray-900 border-b-2 border-transparent hover:border-pink-500 w-24 text-center"
                  to="/browse"
                  >Recipes</nuxt-link
                >
                <nuxt-link
                  class="font-medium text-gray-700 py-5 hover:text-gray-900 border-b-2 border-transparent hover:border-pink-500 w-24 text-center"
                  to="/recipeGuidelines"
                  >Guidelines</nuxt-link
                >
                <nuxt-link
                  class="font-medium text-gray-700 py-5 hover:text-gray-900 border-b-2 border-transparent hover:border-pink-500 w-24 text-center"
                  to="/pantry"
                  >Pantry</nuxt-link
                >
                <nuxt-link
                  class="font-medium text-gray-700 py-5 hover:text-gray-900 border-b-2 border-transparent hover:border-pink-500 w-24 text-center"
                  to="/about"
                  >Contact</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div id="search-toggle" class="search-icon cursor-pointer pl-6">
                <button @click="isSearching = !isSearching">
                  <svg
                    class="fill-current pointer-events-none text-gray-700 w-4 h-4 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              @click="isMobile = !isMobile"
            >
              <span class="sr-only">Open main menu</span>
              <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--Search-->
      <div
        class="z-10 w-full bg-white shadow-xl"
        id="search-content"
        :class="isSearching ? '' : 'hidden'"
      >
        <div class="container mx-auto py-4 text-black">
          <input
            id="searchfield"
            type="search"
            placeholder="I am hungry for..."
            autofocus="autofocus"
            class="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
          />
        </div>
      </div>

      <!-- MOBILE TIME-->
      <!--
     
      Mobile menu, toggle classes based on menu state.
      Open: "block", closed: "hidden"
    -->
      <div class="md:hidden" :class="isMobile ? '' : 'hidden'">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <nuxt-link
            class="border-solid border-4 border-light-blue-500 hover:border-pink-500 block px-3 py-2 rounded-md text-base font-medium"
            to="/about"
            >About</nuxt-link
          >
          <nuxt-link
            class="border-solid border-4 border-light-blue-500 hover:border-pink-500 block px-3 py-2 rounded-md text-base font-medium"
            to="/recipeGuidelines"
            >Guidelines</nuxt-link
          >
          <nuxt-link
            class="border-solid border-4 border-light-blue-500 hover:border-pink-500 block px-3 py-2 rounded-md text-base font-medium"
            to="/pantry"
            >Pantry</nuxt-link
          >
          <nuxt-link
            class="border-solid border-4 border-light-blue-500 hover:border-pink-500 block px-3 py-2 rounded-md text-base font-medium"
            to="/about"
            >Contact</nuxt-link
          >
        </div>
        <!-- <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
              loading="lazy"
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >Your Profile</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >Settings</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >Sign out</a
            >
          </div>
        </div>-->
      </div>
    </nav>

    <!-- 

  <nav class="nav">
    <ul class="menu">
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/recipeGuidelines">Recipe Guidelines</nuxt-link>
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
        <nuxt-link to="/pantry">Pantry</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Contact</nuxt-link>
      </li>
    </ul>
  </nav> -->
  </headroom>
</template>

<script>
import { headroom } from "vue-headroom"

import AppIcon from "@/components/AppIcon.vue"

export default {
  components: {
    headroom,
    AppIcon,
  },
  data() {
    return {
      isMobile: false,
      isSearching: false,
    }
  },
}
</script>

<style lang="scss" scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1em;
  width: 1em;
  border-radius: 50em;
  background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
    no-repeat 50% 50%;
  background-size: contain;
  opacity: 0;
  pointer-events: none;
}

.nav {
  // background: #fff;
  // color: palevioletred;
  // border-bottom: 1px solid #e0e0e0;
  // box-shadow: 0 8px 16px -8px rgba(113, 113, 133, 0.16);
  // padding: 1em 100px;
  // position: sticky;
  // top: 0;
  // transition: transform 0.3s;
  // z-index: 10;

  // a {
  //   color: black;
  //   opacity: 0.8;
  //   &:hover {
  //     opacity: 1;
  //     color: palevioletred;
  //   }
  // }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}

.header {
  font-size: 1.5rem;
  color: palevioletred;
}

// .find-recipes {
//   display: flex;
//   flex-direction: column;
//   padding: 4px;
//   border: 1px solid black;
// }
</style>
