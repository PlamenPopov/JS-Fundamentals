function solve(products) {
    
let sortedProducts=products.sort();

for (let i = 0; i < sortedProducts.length; i++) {
    
    console.log(`${i+1}. ${sortedProducts[i]}`);
    
}


}

solve(['Tomatos','Apple','Banana','kiwi'])