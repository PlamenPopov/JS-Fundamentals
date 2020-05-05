function solve(input=[]) {

    let sortedArr=input.sort((a,b)=>{
        return a-b;
    });

    let result=sortedArr.slice(0,2)

    console.log(result.join(' '));
    
    
}

solve([30, 15, 50, 5])