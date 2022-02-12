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
  selectedCategories: [
    { id: 8, name: "Baked Goods and Desserts", count: 45 },
    { id: 15, name: "Dairy-Free", count: 111 },
  ],
  selectedTags: [],
})

export default {
  state,
  getters,
  actions,
  mutations,
}
