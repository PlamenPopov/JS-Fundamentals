function solve(input) {
     let num=input.map(Number);
    
     console.log(num.sort((a,b)=>a-b).slice(0,2).join(" "))
 }
 solve([3, 0, 10, 4, 7, 3])