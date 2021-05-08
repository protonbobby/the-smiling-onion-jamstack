import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("https://thesmilingonion.com/wp-json/wp/v2/posts?page=1&per_page=20")
    .then((res) => {
      return res.data.map((post) => `/blog/${post.slug}`)
    })
  console.log("Page Routes:", routes)
  return routes
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Slab&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sofia&display=swap",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss", "~/assets/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/posts.server.js",
    "~/plugins/pages.server.js",
    "~/plugins/tags.server.js",
    "~/plugins/categories.server.js",
    "~/plugins/dateformat.js",
  ],
  generate: {
    routes: dynamicRoutes,
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/svg"],
  /*
   ** Build configuration
   */

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  tailwindcss: {
    jit: true,
    configPath: "tailwind.config.js",
  },
}
