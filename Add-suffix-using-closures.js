function anonymous(add) {
  return function () {
    return add + "less";
  };
}

const value = anonymous("fear");
console.log(value());
