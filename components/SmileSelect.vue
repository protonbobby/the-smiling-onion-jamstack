<template>
  <label class="block" for="smile-select">
    <span class="text-gray-700">{{ label }}</span>
    <select
      v-model="selected"
      :name="label"
      clearable
      id="smile-select"
      class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="">--select--</option>
      <option
        v-for="item in items"
        :key="item.id"
        v-bind:value="item"
        :disabled="item.disabled"
        :selected="item.disabled"
      >
        {{ item.name }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "SmileSelect",
  props: {
    value: {
      type: [String, Number, Array],
      default: "",
    },
    items: {
      type: [Object, Array],
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      },
    },
  },
}
</script>

<style></style>
