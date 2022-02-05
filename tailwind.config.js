module.exports = {
  mode: "jit",
  theme: {},
  variants: {
    extend: {
      ringColor: ["hover"],
      ringOffsetColor: ["hover"],
      ringOffsetWidth: ["hover"],
      ringOpacity: ["hover"],
      ringWidth: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
}
