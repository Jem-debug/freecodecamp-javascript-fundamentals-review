const frankenSplice = (arr1,arr2, index) => {
   let localArray = [...arr2];
   localArray.splice(index, 0, ...arr1);

   return localArray;
}
