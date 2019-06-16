function solve(input) {
     let num=input.map(Number);
     let result=[];

     for (let i = 0; i < num.length; i++) {
         if(i%2!==0){
           result.push(num[i]);
         }
     }
     let map=result.map(el=>el*2)
     console.log(map.reverse())
 }
 solve([3, 0, 10, 4, 7, 3])