module.exports = {
  theme: {},
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
  // purge: {
  //   enabled: process.env.NODE_ENV === "production",
  //   content: [
  //     "components/**/*.vue",
  //     "layouts/**/*.vue",
  //     "pages/**/*.vue",
  //     "plugins/**/*.js",
  //     "nuxt.config.js",
  //     // TypeScript
  //     "plugins/**/*.ts",
  //     "nuxt.config.ts",
  //   ],
  // },
}
