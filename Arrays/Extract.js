function solve(input) {

    let arr=input.map(Number);
    let biggestN=arr[0];

    arr.map((el)=>{
        if(el>=biggestN){
            biggestN=el;
            console.log(biggestN)
        }
    });
    
   



}

solve([1,3,2,4])