import pagesIndex from "../pages/wpPages.js"

const siteURL = "http://thesmilingonion.com"

export const state = () => ({
  posts: [],
  tags: [],
  categories: [],
  pages: {},
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updateCategories: (state, categories) => {
    state.categories = categories
  },
  updatePages: (state, page) => {
    state["pages"][page.id] = page
  },
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    // if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then((res) => res.json())
      posts = posts
        .filter((el) => el.status === "publish")
        .map(
          ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            categories,
            content,
            _embedded,
          }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            featuredMedia: _embedded["wp:featuredmedia"]["0"].source_url,
            tags,
            categories,
            //categories: _embedded["wp:term"],
            content,
          })
        )
      commit("updatePosts", posts)
    } catch (err) {
      console.error(err)
    }
  },

  async getTags({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=100&include=${allTags}`
      ).then((res) => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name,
      }))

      commit("updateTags", tags)
    } catch (err) {
      console.error(err)
    }
  },

  async getCategories({ state, commit }) {
    if (state.categories.length) return

    // let allCategories = state.posts.reduce((acc, item) => {
    //   return acc.concat(item.categories)
    // }, [])
    // allCategories = allCategories.join()

    try {
      let categories = await fetch(
        `${siteURL}/wp-json/wp/v2/categories?page=1&per_page=100`
      ).then((res) => res.json())

      categories = categories.map(({ id, name, count }) => ({
        id,
        name,
        count,
      }))
      commit("updateCategories", categories)
    } catch (err) {
      console.error(err)
    }
  },

  async getPage({ state, commit }, wpPage) {
    if (state.pages[wpPage]) return
    try {
      let page = await fetch(
        `${siteURL}/wp-json/wp/v2/pages/${pagesIndex[wpPage]}`
      ).then((res) => res.json())

      const { id, slug, title, content } = page

      commit("updatePages", { id, slug, title, content })
    } catch (err) {
      console.error(err)
    }
  },
}
