function arrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.sort((a, b) => {
      return a - b;
    });
  }
  return arr;
}
console.log(arrSort([1, [6], 3, [2], 0, [4]]));
