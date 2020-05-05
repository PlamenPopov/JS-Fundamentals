function solve(arr,bomb) {
    let array = arr.slice(0);
    let bombNumber=+bomb[0];
    let bombPower=+bomb[1];
    
    for (let i = 0; i < array.length; i++) {
        if(array[i] === bombNumber){
           array.splice(i-bombPower,bombPower*2+1)  
        }
    }
    
    let result=array.reduce((acc,curr)=>{
       return acc+=curr;
    },0)
    
    
    console.log(result);
    
}        
        
solve([1,7,7,1,2,3],[7,1]);