// count occurences of each character in a string

function char_Counts(str1) {
  let chars = {};
  str1.replace(/\S/g, function (l) {
    chars[l] = isNaN(chars[l]) ? 1 : chars[l] + 1;
  });
  return chars;
}
console.log(char_Counts("The quick brown fox jumps over the lazy dog"));

// count occurences of specific letter

function count(str, letter) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      arr.push(str[i]);
    }
  }
  return arr.length;
}

console.log(count("w3resource.com", "o"));
