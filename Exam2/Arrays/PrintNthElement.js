function solve(data=[]) {
    
  let elements=data.map((a)=>Number(a));
  let result=[];
  let calc=elements[elements.length-1]

  for (let i = 0; i < data.length; i+=calc) {
     result.push(elements[i]);
  }

  console.log(result.join(' '));
}

solve(['1','2','3','4','5','6']);