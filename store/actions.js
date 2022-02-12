import pagesIndex from "../pages/wpPages.js"
import { mutations } from "./mutations"

const siteURL = "http://thesmilingonion.com"

export default {
  async getPosts({ state, commit, dispatch }) {
    if (
      state.posts.length > 1 &&
      state.posts.length === state.pagination.totalRecords
    )
      return

    let posts, totalRecords, totalPages
    // https://developer.wordpress.org/rest-api/using-the-rest-api/linking-and-embedding/
    try {
      posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=${state.pagination.currentPage}&per_page=${state.pagination.perPage}&_embed=1`
      ).then((res) => {
        totalRecords = res.headers.get("X-WP-Total")
        totalPages = res.headers.get("X-WP-TotalPages")
        return res.json()
      })

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
            content,
          })
        )

      commit(mutations.updatePosts, posts)
      commit(mutations.updatePagination, {
        totalRecords,
        totalPages,
        currentPage: state.pagination.currentPage + 1,
      })

      if (state.pagination.currentPage <= state.pagination.totalPages) {
        dispatch("getPosts")
      }
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

      commit(mutations.updateTags, tags)
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
      commit(mutations.updateCategories, categories)
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

      commit(mutations.updatePages, { id, slug, title, content })
    } catch (err) {
      console.error(err)
    }
  },

  resetSelected({ commit }) {
    commit(mutations.updateSelectedCategories, "")
    commit(mutations.updateSelectedTags, "")
  },

  updateSelectedCategories({ commit }, dietFilters) {
    const x = Object.entries(dietFilters)
      .filter(([, v]) => v)
      .map(([k]) => Number(k))

    console.log(x)

    commit(mutations.updateSelectedCategories, x)
  },
}
