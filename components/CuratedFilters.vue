<template>
  <div class="space-x-4 m-4">
    <nuxt-link v-for="category in categories" :key="category.name" :to="category.link" class="border p-2">{{category.name}}</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [{
        name: 'Simple & Easy',
        link: '/browse',
        action: ()=> {},
      },
      {
        name: 'Twists on the Classics',
        link: '/browse',
        action: ()=> {},
      },
      {
        name: 'Something Else',
        link: '/browse',
        action: ()=> {},
      }]
    }
  },
}
</script>
