function solve(input) {
  let wall=input.map(Number);
  let complate=false;
  let log=[];

while (!complate) {
    let cubicYards=0;
    complate=true;
    for (let i = 0; i < wall.length; i++) {
        if(wall[i]<30){
            wall[i]+=1;
            cubicYards+=195;
            complate=false;
        }
    }
    if(!complate){
        log.push(cubicYards);
    }
}
  
console.log(log.join(", "));
console.log(log.reduce((a,b)=>a+b)*1900 + " pesos");
     


}

solve(
    ["21","25","28"]
);