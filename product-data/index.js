const fs = require("fs");
const data = fs.readFileSync("./edit.json", "utf-8");
const parsedData = JSON.parse(data);
const updated = [];

const s = ["XS","S","M","L","XL","2XL","3XL"];
// const s = ['30','32','34','36','38','40','42','44','46'];


for (let i = 0; i < parsedData.length; i++) {
    let el = parsedData[i]
  let obj = {
    image: el.i,
    brand: el.b,
    color : "Blue",
    title: el.t,
    size: [],
    sellingPrice: + el.sp,
    marketPrice: + el.mp,
    percentageDiscount: el.d.includes("%") ?  el.d : "",
    faltDiscount: el.d.includes("%") ? "" : el.d,
    inventory: 10,
  };
  if (obj.percentageDiscount) {
    let x = obj.percentageDiscount.split("");
    let y = x.slice(1, x.indexOf("%"));
    obj.percentageDiscount = Number(y.join(""));
  }


  if (obj.faltDiscount) {
    let x = obj.faltDiscount.replace("(","").replace(")","").split(" ");
    obj.faltDiscount = Number(x[0]);
  }


if(!s.includes(obj.size)) s.push(obj.size)

while(obj.size.length<4){
  let idx = Math.floor(Math.random()*7)
 
if(!obj.size.includes(s[idx])) obj.size.push(s[idx])
obj.size = obj.size.sort((a,b)=> s.indexOf(a)-s.indexOf(b))
}





obj.collections = "Women"
obj.subCollection = "Indian"
obj.gender = "Women"
obj.category = "Kurtas"
  updated.push(obj);

}
// console.log(s)

fs.writeFileSync("./update.json", JSON.stringify(updated), "utf-8");
