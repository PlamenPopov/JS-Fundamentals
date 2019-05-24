function solve(input){
  let copy=input.slice(0);
 let step=+input[input.length-1];
 copy.pop();

for (let i = 0; i <=copy.length; i+=step) {
   console.log(copy[i]);    
}

  return copy;
}

solve(['5','20','31','4','21','2']);