export const mutations = {
  updatePosts: "UPDATE_POSTS",
  updateTags: "UPDATE_TAGS",
  updateCategories: "UPDATE_CATEGORIES",
  updateSelectedCategories: "UPDATE_SELECTED_CATEGORIES",
  updateSelectedTags: "UPDATE_SELECTED_TAGS",
  updatePages: "UPDATE_PAGES",
  updatePagination: "UPDATE_PAGINATION",
}

export default {
  [mutations.updatePosts]: (state, posts) => {
    state.posts.push(...posts)
  },
  [mutations.updateTags]: (state, tags) => {
    state.tags = tags
  },
  [mutations.updateCategories]: (state, categories) => {
    state.categories = categories
  },
  [mutations.updateSelectedCategories]: (state, selectedCategories) => {
    state.selectedCategories = selectedCategories
  },
  [mutations.updateSelectedTags]: (state, selectedTags) => {
    state.selectedTags = selectedTags
  },
  [mutations.updatePages]: (state, page) => {
    state["pages"][page.id] = page
  },
  [mutations.updatePagination]: (state, payload) => {
    state["pagination"] = { ...state["pagination"], ...payload }
  },
}
