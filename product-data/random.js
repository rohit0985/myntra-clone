const fs = require("fs");
const data = fs.readFileSync("./edit.json", "utf-8");
let parseddata = JSON.parse(data);
const suffeled = [];

let parsedData = parseddata.filter((el,i)=> el.sellingPrice !== 0 && typeof(el.sellingPrice !== "string"))

for(let i=0; i<50; i++){
  while (parsedData.length > 0) {
    const ri = Math.floor(Math.random() * parsedData.length);
    const ro = parsedData[ri];
    if(parsedData.sellingPrice && !parsedData.marketPrice){
      parsedData.marketPrice = parsedData.sellingPrice
      parsedData.percentageDiscount = ""
     parsedData.faltDiscount = ""
    }
    suffeled.push(ro);
    parsedData.splice(ri, 1);
  }
}

fs.writeFileSync("./update.json", JSON.stringify(suffeled), "utf-8");
