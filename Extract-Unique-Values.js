function extractUnique(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) === -1) {
      arr.push(str[i]);
    }
  }
  return arr;
}

console.log(extractUnique("thequickbrownfoxjumpsoverthelazydog"));
