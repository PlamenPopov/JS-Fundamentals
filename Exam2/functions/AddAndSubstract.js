function solve(a,b,c) {
    
    let sum=(a,r)=>a+r;
    let substract=(x,y)=>x-y;
    
    let add=sum(a,b);
    let result=substract(add,c);

console.log(result);

}

solve(1,17,30);