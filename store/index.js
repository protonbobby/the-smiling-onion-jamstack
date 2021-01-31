import pagesIndex from "../pages/wpPages.js"

const siteURL = "http://thesmilingonion.com"

export const state = () => ({
  posts: [],
  pagination: {
    totalRecords: 0,
    totalPages: 0,
    currentPage: 1,
    perPage: 25,
  },
  tags: [],
  categories: [],
  pages: {},
  selectedCategories: "",
  selectedTags: "",
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts.push(...posts)
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updateCategories: (state, categories) => {
    state.categories = categories
  },
  updateSelectedCategories: (state, selectedCategories) => {
    state.selectedCategories = selectedCategories
  },
  updateSelectedTags: (state, selectedTags) => {
    state.selectedTags = selectedTags
  },
  updatePages: (state, page) => {
    state["pages"][page.id] = page
  },
  updatePagination: (state, payload) => {
    state["pagination"] = { ...state["pagination"], ...payload }
  },
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (
      state.posts.length > 1 &&
      state.posts.length === state.pagination.totalRecords
    )
      return

    let posts, totalRecords, totalPages

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

      commit("updatePosts", posts)
      commit("updatePagination", {
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

  resetSelected({ commit }) {
    commit("updateSelectedCategories", "")
    commit("updateSelectedTags", "")
  },
}

export const getters = {
  // getTags(state) {
  //   return state.tags.map((tag) => tag.name).toString()
  // },
  getFilteredPosts(state) {
    if (!state.selectedTags && !state.selectedCategories) return state.posts
    if (!state.selectedTags) {
      return state.posts.filter((post) =>
        post.categories.includes(state.selectedCategories.id)
      )
    }
    if (!state.selectedCategories) {
      return state.posts.filter((post) =>
        post.tags.includes(state.selectedTags)
      )
    }
    return state.posts.filter(
      (post) =>
        post.tags.includes(state.selectedTags) &&
        post.categories.includes(state.selectedCategories.id)
    )
  },
  searchResults(state, getters) {
    return getters.getFilteredPosts.length || state.pagination.totalRecords
  },
}
