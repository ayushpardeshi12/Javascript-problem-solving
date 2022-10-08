function Object1(obj) {
  return [Object.keys(obj), Object.values(obj)];
}
console.log(Object1({ a: 1, b: 2 }));
