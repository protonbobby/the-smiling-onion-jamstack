<template>
  <div class="bg-pink-400">{{ text }}</div>
</template>

<script>
export default {
  name: "SmileChip",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
}
</script>
