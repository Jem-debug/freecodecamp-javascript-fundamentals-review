const pairElement = (str) => {
  let arrContainer = [];
  let pair = [];
  let strToArr = str.split("");

  for(let i = 0; i < strToArr.length; i++){
     pair.push(strToArr[i]);
     switch(strToArr[i]){
       case "A":
         pair.push("T");
         break;
       case "T":
         pair.push("A");
         break;
       case "C":
         pair.push("G");
         break;
       case "G":
         pair.push("C");
         break;
        default:
         break;
     }
     arrContainer.push(pair);
     pair = [];
  }

  return arrContainer;
}

pairElement("TTGAT");
