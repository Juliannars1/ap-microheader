const merge = require("concat");

const files = [
  "./dist/header/main.js",
  "./dist/header/polyfills.js",
  "./dist/header/runtime.js",
];

merge(files, "./dist/header/header.js");
console.log("file generated");
