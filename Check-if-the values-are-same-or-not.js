function ErroVal(arr1, arr2) {
  let num = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        num.push(i, j);
        return "Same values";
      }
    }
  }
  return false;
}
console.log(ErroVal([1, 2], [1, 2]));
