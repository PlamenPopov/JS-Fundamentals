function solve(params) {
  
let myArr=[];    

for (let i = 0; i < params.length; i++) {
      if(params[i]>params[i+1]){
          myArr.push(params[i])
          
      }  
}

    myArr.push(params[params.length-1])
     console.log(myArr.join(' '));
     
}

solve([41,41,34,20]);