const sumFibs = (num) => {
  let prev = 0;
  let cur = 1;
  let sum = 0;

  for (; cur <= num; ) {
    if (cur % 2 !== 0) {
      sum += cur;
    }
    let next = prev + cur;
    prev = cur;
    cur = next;
  }

  return sum;
}

console.log(sumFibs(1000));
