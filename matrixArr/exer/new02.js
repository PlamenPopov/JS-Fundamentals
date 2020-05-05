function solve(input) {

    
    function fillparking(input) {
             let parking={};
             input.forEach(el => {
                let car=el.split(', ');
                parking[car[1]]=car[0]
             });

            return parking ;  
}   

   function filterCarsIn(input) {
       let output=[];
       Object.entries(input).forEach(x=>{
           if(x[1]==='IN'){
               output.push(x[0]);
           }
       })
       return output;
   }

   function getOutput(input) {
     return input.length===0
          ? 'Parking is empty!'
          : input.sort((a,b)=>a.localeCompare(b)).join('\n');   
       }

let parking=fillparking(input);
let carsIn=filterCarsIn(parking);

return getOutput(carsIn)

}




console.log(solve(
    ['IN, CA2844AA',
    
    'OUT, CA2844AA',
    
    'OUT, CA2866HI',
    'IN, CA2866HI']
    
))