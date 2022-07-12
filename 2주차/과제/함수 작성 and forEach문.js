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