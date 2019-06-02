function solve(input) {
    
    let products={};

    input.forEach(product => {
        let split=product.split(" :");
        let name=split[0];
        let price=+split[1];
        
        products[name]=price;
        
    }); 

     let capital=new Set();

     Object.keys(products).forEach((l)=>{
         capital.add(l[0]);
     });

     for (const char of Array.from(capital.keys()).sort()) {
         console.log(char)

         for (const product of Array.from(Object.keys(products).sort())) {
             if(product.startsWith(char)){
                 console.log(`  ${product}: ${products[product]}`)
             }
         }
     }

    
     
   
   

}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);