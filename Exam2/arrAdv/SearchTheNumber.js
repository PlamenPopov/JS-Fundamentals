function solve(arr=[],params=[]) {
    
    let array=arr.slice(0);
    let count=+params[0];
    let deleteCount=+params[1];
    let searchNum=+params[2];
   
    let a=array.splice(0,count);
    
    for (let i = 0; i < deleteCount; i++) {
        a.shift();
    }

    let searchedNum=0;

    for (const num of a) {  
        if(a.includes(searchNum)){
           searchedNum++;
        }
    }
    
   console.log(`Number ${searchNum} occuse ${searchedNum} times.`);
   
}

solve([5,2,3,3,3,4,1,6],[5,2,3]);