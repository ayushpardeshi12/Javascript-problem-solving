// check Positive divisor

function PositiveDivisors(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  let reducedArray = array.reduce((a, b) => {
    return a + b;
  });

  if (reducedArray === num) {
    return `${num} is a Positive Divisor`;
  } else {
    return `${num} is not a Positive Divisor`;
  }
}

console.log(PositiveDivisors(6));
