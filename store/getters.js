export default {
  getPost(state) {
    return (selectedPostSlug) => {
      return state.posts.find((el) => el.slug === selectedPostSlug)
    }
  },
  getLatestPosts(state) {
    return state.posts[4]
  },
  getFilteredPosts(state) {
    if (!state.selectedTags.length && !state.selectedCategories.length)
      return state.posts

    if (!state.selectedTags.length) {
      return state.posts.filter((post) => {
        // state.selectedCategories.forEach(element => {

        // });
        return post.categories.includes(state.selectedCategories[0])
        //&& post.categories.includes(state.selectedCategories[1])
      })
    }

    if (!state.selectedCategories.length) {
      return state.posts.filter((post) =>
        post.tags.includes(state.selectedTags)
      )
    }

    return state.posts.filter(
      (post) =>
        post.tags.includes(state.selectedTags) &&
        post.categories.includes(state.selectedCategories[0].id)
    )
  },
  searchResults(state, getters) {
    return getters.getFilteredPosts.length || state.pagination.totalRecords
  },
  // getTags(state) {
  //   return state.tags.map((tag) => tag.name).toString()
  // },
}
