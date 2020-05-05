function solve(params=[],counter) {
   
   

for (let i = 0; i < counter; i++) {
 let element=params.shift();
params.push(element);
}
console.log(params.join(' '))
}

solve([51,47,32,61,21],6);