//풀이1
/*
function Fibo(fibo1, fibo2, fibo2, count){
    if (count===1){
        console.log(1);
        count += 1;
        Fibo(fibo1, fibo2, fibo2, count);
    } else if (fibo1 < 100){
        fibo3 = fibo2
        fibo2 = fibo1;
        fibo1 += fibo3;
    console.log(fibo1);
    Fibo(fibo1, fibo2, fibo2, count)} 
}


var fibo1 = 1;
var fibo2 = 1;
var count = 1;
Fibo(fibo1, fibo2, fibo2, count);
*/


//풀이 2
/* 
function Fibo(k){
    if(k <= 1){
        return 1;
    } else{ 
        return Fibo(k-1) + Fibo(k-2);
    }
}

for(var i = 1; i < 10; i += 1){
    console.log(Fibo(i));
}
*/