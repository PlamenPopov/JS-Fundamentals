function solve(arr) {
    
let products=new Map();

for (const el of arr) {
    
let [product,quantity]=el.split(' ');
quantity=Number(quantity);

if(products.has(product)){
    quantity+=products.get(product);
}
products.set(product,quantity);

}

for (const [key,value] of products) {
    console.log(`${key} -> ${value}`);
    
}



}

solve(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])