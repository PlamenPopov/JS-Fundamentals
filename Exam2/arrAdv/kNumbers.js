function solve(arr=[]) {

    let kNumber=arr.shift();
    let resultOne=arr.slice(0,kNumber);
    let resultTwo=arr.slice(arr.length-kNumber,arr.length);

    console.log(resultOne.join(' '));
    console.log(resultTwo.join(' '));
    
    



    
}

solve([3,7,8,9,11,12,13,15])