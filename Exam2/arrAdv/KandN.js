function solve(n,k) {
    
    let result=[];
    result[0]=1;
    
    
    

    for (let i = 1; i < n; i++) {

     let sum=0;

     for (let j = i-1; j >=0 && j>=i-k; j--) {
         
       sum+=result[j];

     }

     result[i] = sum;

     
        
    }
     console.log(result.join(' '));
     
}

solve(6,3)