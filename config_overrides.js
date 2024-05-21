const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    "os": require.resolve("os-browserify/browser"),
    "crypto": require.resolve("crypto-browserify")
  })
);
