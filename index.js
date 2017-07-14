/*
  Thaana_Transliterator by naxeem (http://naxeem.com)
  Inspired by works of
  Kailash Nadh (github.com/knadh/ml2en) and Ayaz (github.com/ifreaker/Thaana-Transliterater)

  Converted to JavaScript by Nick Doiron (ndoiron@mapmeld.com)
  This work is licensed under GPL v2
*/

var ThaanaTransliterator = function(input) {
  var fili_fix = { "އަ": "a",  "އާ": "aa", "އި": "i", "އީ": "ee", "އު": "u",  "އޫ": "oo", "އެ": "e",  "އޭ": "ey", "އޮ": "o", "ޢަ": "a",  "ޢާ": "aa", "ޢި": "i", "ޢީ": "ee", "ޢު": "u",  "ޢޫ": "oo", "ޢެ": "e",  "ޢޭ": "ey", "ޢޮ": "o", "އޯ": "oa", "ުއް": "uh", "ިއް": "ih", "ެއް": "eh", "ަށް": "ah", "ައް": "ah", "ށް": "h",  "ތް": "i",  "ާއް": "aah", "އް": "ih", "އް": "h" };

  var all_akuru_fili = { "ަ": "a",  "ާ": "aa", "ި": "i", "ީ": "ee", "ު": "u",  "ޫ": "oo", "ެ": "e",  "ޭ": "ey", "ޮ": "o", "ޯ": "oa", "ް": "",  "ހ": "h", "ށ": "sh", "ނ": "n",  "ރ": "r", "ބ": "b",  "ޅ": "lh", "ކ": "k", "އ": "a",  "ވ": "v",  "މ": "m", "ފ": "f",  "ދ": "dh", "ތ": "th", "ލ": "l",  "ގ": "g",  "ޏ": "y", "ސ": "s",  "ޑ": "d",  "ޒ": "z", "ޓ": "t",  "ޔ": "y",  "ޕ": "p", "ޖ": "j",  "ޗ": "ch", "ޙ": "h", "ޚ": "kh", "ޛ‎": "z",  "ޜ‎": "z", "ޝ‎": "sh", "ޝ": "sh", "ޤ": "q", "ޢ": "a",  "ޞ": "s",  "ޟ": "dh", "ޡ": "z",  "ޠ": "t",  "ާާޣ": "gh", "ޘ": "th",  "ޛ": "dh",  "ާާޜ": "z" };

  var punctuations = {
  "\\]": "[",  "\\[": "]",  "\\\\": "\\", "'": "'", "،": ",",  "\\.": ".", "/": "/",  "÷": "",  "}": "{", "{": "}",  "\\|": "|",  ":": ":", "\"": "\"", ">": "<",  "<": ">", "؟": "?",  "\\)": ")",  "\\(": "(" };
  
  // remove zwj marks
  input = input.replace(/\xE2\x80\x8C/g, '');
  
  function doReplace(list) {
    var keys = Object.keys(list);
    for (var i = 0; i < keys.length; i++) {
      var rx = new RegExp(keys[i], 'g');
      input = input.replace(rx, list[keys[i]]);
    }
  }
  
  doReplace(fili_fix);
  doReplace(all_akuru_fili);
  doReplace(punctuations);
  return input;
}

if (typeof module !== 'undefined') {
  module.exports = ThaanaTransliterator;
}
