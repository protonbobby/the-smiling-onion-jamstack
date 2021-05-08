import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

const state = () => ({
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

export default {
  state,
  getters,
  actions,
  mutations,
}
