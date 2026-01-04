const sumAll = (arr) => {
  if (!Array.isArray(arr) || arr.length !== 2) {
    return "Array of two numbers is only needed";
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

sumAll([1, 4]);
