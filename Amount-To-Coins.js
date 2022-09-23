function amountTocoins(amount, coins) {
  if (amount == 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      let left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}
console.log(amountTocoins(50, [20, 10, 10, 5, 2, 1]));
