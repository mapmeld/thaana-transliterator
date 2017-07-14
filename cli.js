#! /usr/bin/env node

const fs = require("fs");
const transliterator = require('./index.js');

if (process.argv.length > 2) {
  var srcFile = process.argv[2];
  fs.readFile(srcFile, "utf-8", function(err, srcText) {
    if (err) {
      throw err;
    } else {
      console.log(transliterator(srcText));
    }
  });
} else {
  console.log("Please provide a file name.");
}
