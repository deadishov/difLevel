let num = 266219;
let myVar = 1


num.toString().split('').forEach(elem => myVar *= elem);
console.log(num);
console.log(myVar);
console.log(myVar **= 3);
console.log(myVar.toString().substring(0, 2));