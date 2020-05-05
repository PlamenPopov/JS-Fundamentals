function solve(currProducts=[], deliverdProducts=[]) {

let store=[];

for (let i = 0; i < deliverdProducts.length; i++) {
    if(currProducts.includes(deliverdProducts[i])){
        let index=currProducts.indexOf(deliverdProducts[i]);
        currProducts[index+1]=Number(currProducts[index+1]);
        currProducts[index+1]+=+deliverdProducts[i+1];
    }   
}

for (let i = 0; i < currProducts.length; i+=2) {
    
    let a=currProducts[i];
    let b=currProducts[i+1];

    let obj={
        name:a,
        quantity:b
    }

    store.push(obj);
}


while (deliverdProducts.length>0) {
    let a=deliverdProducts.shift();
    let b=deliverdProducts.shift();

    let obj={
        name:a,
        quantity:b
    } 
        if(!currProducts.includes(a)){
            store.push(obj);
        }
}


for (const product of store) {
    console.log(`${product.name} -> ${product.quantity}`)
}

  
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beers', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatos', '70', 'Bananas', '30']);
