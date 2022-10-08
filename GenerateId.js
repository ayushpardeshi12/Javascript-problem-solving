function makeId(num) {
  let text = "";
  let char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < num; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}

console.log(makeId(8));
