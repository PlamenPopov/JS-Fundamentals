let solve=(data) => {

let array=data.toString();
    
let even=0;
let odd=0;

 for (let i = 0; i < array.length; i++) {
     if(array[i] % 2 === 0){
       even+=Number(array[i]);
     }else{
         odd+=Number(array[i]);
     }  
 } 
 
 
 return (`Odd sum:${odd}  Even sum:${even}`);
};

let result=solve(3495892137259234);

console.log(result);
