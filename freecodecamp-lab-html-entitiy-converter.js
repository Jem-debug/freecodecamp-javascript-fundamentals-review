const convertHTML = (str) => {
  if(str.trim() === ""){
     return "INPUT PLS";
  }
  
  return str.replaceAll("&","&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', '&quot;').replaceAll("'", "&apos;");
}

console.log(convertHTML("Dolce & Gabbana"));  // The output will be the same as input yet freeCodeCamp lets this code pass the activity.
