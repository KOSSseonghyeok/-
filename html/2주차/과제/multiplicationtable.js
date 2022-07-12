/* 1번
var count;
var i;
for(count = 2; count < 10; count++){
    for(i=1; i < 10; i++){
        console.log(count+"*"+i +"="+(i*count));
    }
}
*/

/* 2번 문제
const date = new Date(2017, 9, 3, 18, 20, 30);
console.log('date:%s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());
console.log('LocaleTimeString : %s', date.toLocaleTimeString());
console.log('year : %s', date.getFullYear());
console.log('month : %s', date.getMonth());
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());
*/

/*
3번 문제
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
*/

/*
const students = [
    { name: 'kyeongrok', score : 85 },
    { name: 'jihyun', score : 95 },
    { name: 'minsup', score : 76 }
];

function getDegree(score){
    if(score >= 90){return score = "A"}
    else if(score >= 80) {return score = "B"}
    else if(score >= 60) {return score = "C"}
    else{return score = "F"}}

students.forEach((students) => {const result = `name: ${students.name}, score:${getDegree(students.score)}`;
console.log(result);
});
*/

