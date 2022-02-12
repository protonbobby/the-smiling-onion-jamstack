const unescapeChars = (str) =>
  str.replace(
    /&#038;|&#8217;|&gt;|&#39;|&quot;/g,
    (tag) =>
      ({
        "&#038;": "&",
        "&#8217;": "'",
        "&gt;": ">",
        "&#39;": "'",
        "&quot;": '"',
      }[tag] || tag)
  )

export default unescapeChars
