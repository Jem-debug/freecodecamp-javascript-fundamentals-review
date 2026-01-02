const titleCase = (str) => {
   const words = str.toLowerCase().split(" ");

   for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
   }

   const wrdToSntnc = words.join(" ");

   return wrdToSntnc;
}

console.log(titleCase("I like to code"));
