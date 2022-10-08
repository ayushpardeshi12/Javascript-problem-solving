function countDigita(num) {
  let arr = [];
  num = num.toString(10);
  for (let i = 0; i < num.length; i++) {
    arr.push(parseInt(num[i]));
  }

  return arr.length;
}

console.log(countDigita(12345678));
