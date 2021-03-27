<template>
  <div class="flex space-x-8 text-sm">
    <div
      v-for="(diet, index) in diets"
      :key="diet.index"
      class="bg-green-200 h-12 flex items-center p-4"
    >
      {{ diet.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    diets: {
      type: [Array, Object],
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
