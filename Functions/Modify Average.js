function solve(input){

    let numToString=input.toString(); 
    let finalSum=Sum(numToString);

      
    function Sum(n){
        let sum=0;
        for (const digit of n) {
            sum+=+digit;
        }
       return sum;
    }

     
     
     while (finalSum/numToString.length<=5) {
         numToString+='9';
         finalSum=Sum(numToString);
     }
   
    console.log(numToString);

}

solve(101)