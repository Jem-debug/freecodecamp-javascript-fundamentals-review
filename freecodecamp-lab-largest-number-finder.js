const largestOfAll = (arr) => {
  let arrays = [];

  for(let i = 0; i < arr.length; i++){
    let max = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
         max = arr[i][j]
      }
    }
    arrays.push(max);
  }

  return arrays;
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
