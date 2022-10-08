function repDigit(num) {
  let num1 = num.toString(10);
  if (num1[0] === num1[1]) {
    return "Rep Digit";
  }
  return false;
}
console.log(repDigit(62));
