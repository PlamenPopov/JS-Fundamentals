function solve(arr=[]) {

let result=[];
let copy=arr.slice(0).sort((a,b)=>b-a)
    

while (copy.length !== 0) {
    result.push(copy.shift());
    result.push(copy.pop());
}

console.log(result.join(' '));

}


solve([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94]);