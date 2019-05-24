function solve(input){

let copy=input.slice(0);
let delimeter=copy.splice(copy.length-1);


let result=copy.filter((el)=>{
  return el!=copy[copy.length-1];
})
.map((el)=>{
    return el+delimeter
})

let final='';
result.forEach(element => {
     final+=element;
});

final+=copy[copy.length-1];

console.log(final)





return copy;

}

solve(["One","two","three","-"])