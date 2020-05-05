function solve(arr) {
    
let map=new Map();

for (const el of arr) {
    let [direction,carNum] = el.split(', ');

    if(direction==='IN'){
        map.set(carNum)
    }else if(direction==='OUT' && map.has(carNum)){
        map.delete(carNum)
    }
}


let temp=Array.from(map).sort((a,b)=>{
    return a[0].localeCompare(b[0]);
});

if(temp.length===0){
    console.log('Parking is empty!')
}

for (const car of temp) {
    console.log(car[0]);   
}

   

}

solve(
    ['IN, CA2844AA',
    
    'OUT, CA2844AA',
    
    'IN, CA2866HI',
    
    'OUT, CA2866HI'
    
])