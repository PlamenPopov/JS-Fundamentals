function solve(arr=[]) {
    
let pattern=/>>([a-zA-Z]+)<<(\d+\.?\d+)!(\d+)/gm;
let lines=arr.slice(0,arr.indexOf('Purchase')).join('\n');
let array=Array.from(lines.matchAll(pattern));

let string=`Bought furniture:`;
let cost=0;
for (const match of array) {
     string+= '\n'+match[1];
     cost+=Number(match[2]*Number(match[3]));
}

console.log(string + `\nTotal money spend:${cost}`);









    
    
}

solve(['>>Sofa<<312.23!3',

    '>>TV<<300!5',
    
    '>Invalid<<!5',
    
    'Purchase'])