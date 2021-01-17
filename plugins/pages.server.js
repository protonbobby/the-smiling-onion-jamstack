export default async ({ store }) => {
  await store.dispatch("getPage", "about")
  await store.dispatch("getPage", "recipeGuidelines")
  await store.dispatch("getPage", "pantry")
}
