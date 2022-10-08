function ArrayMult(num, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    if ((num * i) % num === 0) {
      arr.push(i * num);
    }
  }
  return arr;
}

console.log(ArrayMult(7, 5));
