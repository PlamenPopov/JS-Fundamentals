function solve(input=[]) {
    
let map=new Map();

for (const string of input) {


    if(!map.has(string)){
        map.set(string,[])
       map.set(string,map.get(string).concat(" ok"))
    }else{
        map.set(string,map.get(string).concat(" ok"))
    }   
}

let temp=Array.from(map.entries());
temp.sort((a,b)=>{
    return b[1].length - a[1].length;
});


for (const el of temp) {
    console.log(`${el[0]} -> ${el[1].length} times`);
    
}




}

solve(["Here", "is", "the", "first",
       "sentence", "Here", "is", "another",
       "sentence", "And", "finally", "the",
       "third", "sentence"]);