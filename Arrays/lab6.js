function solve(input) {
     let num=input.map(Number);
     let result=[];

     for (let i = 0; i < num.length; i++) {
         if(i%2!==0){
           result.push(num[i]);
         }
     }
     console.log(result.map(el=>el*2).reverse().join(" "))
 }
 solve([3, 0, 10, 4, 7, 3])