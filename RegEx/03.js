function solve(arr) {
    let pattern=/%([A-Z][a-z]+)%<([A-Z][a-z]+)>\|(\d+)\|(\d+\.\d+)*\$/gm

        let lines=arr.slice(0).join('')
        let array=Array.from(lines.matchAll(pattern));
        let sum=0;

        for (const person of array) {
            let [name,product,quantity,price]=[person[1],person[2],person[3],person[4]]
            price*=+quantity;
            sum+=price;
            console.log(`${name}:${product} - ${price.toFixed(2)}`);
            
        }
        
        console.log(`Total income:${sum.toFixed(2)}`);
    
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ])
