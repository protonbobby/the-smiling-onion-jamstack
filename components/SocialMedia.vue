<template>
  <div class="flex space-x-4">
    <a :href="facebookLink" target="_blank">
      <facebook-logo class="w-6 hover:fill-current hover:text-pink-500" />
    </a>
    <a :href="twitterLink" target="_blank">
      <twitter-logo class="w-6 hover:fill-current hover:text-pink-500" />
    </a>
    <a href="#" target="_blank">
      <instagram-logo class="w-6 hover:fill-current hover:text-pink-500" />
    </a>
    <a href="#" target="_blank">
      <pinterest-logo class="w-6 hover:fill-current hover:text-pink-500" />
    </a>
  </div>
</template>

<script>
import TwitterLogo from "~/assets/svgs/twitter.svg?inline"
import FacebookLogo from "~/assets/svgs/facebook.svg?inline"
import InstagramLogo from "~/assets/svgs/instagram.svg?inline"
import PinterestLogo from "~/assets/svgs/pinterest.svg?inline"
import unescapeChars from "~/plugins/unescapeChars.js"

export default {
  name: "SocialMedia",
  components: { TwitterLogo, FacebookLogo, InstagramLogo, PinterestLogo },
  props: {
    title: {
      type: String,
      default: "",
    },
    linkToPost: {
      type: String,
      default: "",
    },
  },
  computed: {
    twitterLink() {
      //#1DA1F2
      const base = "https://twitter.com/intent/tweet"
      const newLine = "%0D%0A"
      const recipeTitle = `${encodeURI(unescapeChars(this.title))}`
      const text = `text=Try+out+${recipeTitle}+from+@smilingonionrecipes+!${newLine}${newLine}`
      const url = `url=${this.linkToPost}+${newLine}+${newLine}`
      const hashTags = `hashtags=${"glutenfree"}`

      return `${base}?${text}&${url}&${hashTags}`
    },
    facebookLink() {
      return `https://www.facebook.com/dialog/share?app_id=&display=page&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer`
    },
    instagramLink() {
      return ``
    },
    pinterestLink() {
      return ""
    },
  },
}
</script>
