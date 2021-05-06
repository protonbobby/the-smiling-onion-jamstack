<template>
  <div>
    <button
      class="appearance-none w-32 flex p-2 items-center justify-center rounded-md border border-gray-300 focus:ring-4 focus:border-pink-300 focus:ring focus:ring-pink-300 focus:ring-opacity-50"
      type="button"
    >
      <slot name="prepend" />
      {{ text }}
      <slot name="append" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SmileButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
