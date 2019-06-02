function solve(input) {
    
    let cars={};


   input.forEach(element => {
       let split=element.split(" | ");
       let brand=split[0];
       let model=split[1];
       let count=+split[2];


       if(!cars.hasOwnProperty(brand)){
           cars[brand]={};    
       }
       if(!cars[brand].hasOwnProperty(model)){
           cars[brand][model]=count;
       }else{
           cars[brand][model]+=count;
       }
    });

   for (const car of Object.keys(cars)) {
      console.log(car)
       for (const model of Object.keys(cars[car])) {
               console.log(`###${model} -> ${cars[car][model]} `)
       }
   }
}

solve([
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10',
]);