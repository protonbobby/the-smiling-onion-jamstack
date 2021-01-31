<template>
  <div>
    <label class="text-xs text-pink-500 py-1" for="smile-select">{{
      label
    }}</label>
    <select v-model="selected" :name="label" id="smile-select">
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
  </div>
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
