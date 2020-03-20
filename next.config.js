const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
//const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});

module.exports = withPlugins([[withSass], [withCSS], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
