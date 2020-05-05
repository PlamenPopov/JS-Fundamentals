function solve(arr) {
    let firstElement=arr.shift();
    let lastElement=arr.pop();
    let result=firstElement+lastElement;

    console.log(result);
    
}

solve([20,40,60])