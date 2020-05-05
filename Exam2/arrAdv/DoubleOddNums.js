function solve(arr) {
    
let oddNums=[];


for (let i = 0; i < arr.length; i++) {
    if(i%2 !== 0){
       oddNums.push(arr[i]);
    }   
}

let doubleNum=[]
for (const number of oddNums) {
     doubleNum.push(number*2);
    
}
console.log(doubleNum.reverse().join('--'));




}

solve([3, 0, 10, 4, 7, 3]);