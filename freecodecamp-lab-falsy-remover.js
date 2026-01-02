const bouncer = (arr) => {
   if(typeof arr !== "object"){
     return "This is not an array";
   }

   const filter = arr.filter((e)=> {
      if(e){
        return e;
      }
   })

   return filter;
}

console.log(bouncer([7, "ate", "", false, 9]));
