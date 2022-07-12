const maxResult=Math.max(95,80,88,79,50);
const minResult=Math.min(95,80,88,79,50);

function sum(a, b){
return a + b
}

function average(a, b){
return (a + b)/2
}

console.log('max : '+maxResult);
console.log('mix : '+minResult);
console.log('sum : '+sum(maxResult, minResult));
console.log('average : '+average(maxResult, minResult));