function solve(input) {
     
    let n=+input[0];
    let k=+input[1];

    let result=[1];
    
    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0,i-k);
       let curentEl=result.slice(startIndex,startIndex+k).reduce((a,b)=>a+b) ;
       result.push(curentEl) ;     
    }

    console.log(result.join(" "))
    
 }
 solve([6,3])