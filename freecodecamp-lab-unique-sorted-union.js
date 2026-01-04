function uniteUnique(){
  const arr = [...arguments];
  let merge = [];
  for(const arg of arr){
    merge.push(...arg);
  }
  
  const uniqueArr = Array.from(new Set(merge));
  return uniqueArr;

}

uniteUnique([1,2,4], [2,3,5]);
