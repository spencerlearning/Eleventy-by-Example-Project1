module.exports = function(eleventyConfig) {
  // Copy `assets/` to `_site/assets/`
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      // "_site" is the default, but it's included for clarity.
      output: "_site",
      // "_includes" is the default
      includes: "_templates",
    },
  };
}
