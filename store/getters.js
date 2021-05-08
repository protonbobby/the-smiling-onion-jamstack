export default {
  // getTags(state) {
  //   return state.tags.map((tag) => tag.name).toString()
  // },
  getLatestPost(state) {
    return state.posts[5]
  },
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
