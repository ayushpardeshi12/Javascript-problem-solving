function largerNumber(arr, num) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(largerNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
