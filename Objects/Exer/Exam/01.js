function solve(arr=[]) {

let array=arr.slice(0);
let buscuits=array.shift();
let workers=array.shift();
let pastCount=array.shift();

let montlyBiscuits=0;

for (let i = 0; i < 30; i++) {

    if(i % 3 === 0){
        montlyBiscuits+=Math.floor((buscuits*workers)*0.75);
    }else{
        montlyBiscuits+=buscuits*workers;
    }
}

let difference=0;
if(montlyBiscuits>pastCount){
 difference=montlyBiscuits-pastCount;
 let result=difference/pastCount*100;
 let percentage=result.toFixed(2);
 console.log(`You have produced ${montlyBiscuits} biscuits for the past month.`);
 console.log(`You produce ${percentage} percent more biscuits.`);
}else{
    difference=pastCount-montlyBiscuits;
    let result=difference/pastCount*100;
    let percentage=result.toFixed(2);
    console.log(`You have produced ${montlyBiscuits} biscuits for the past month.`);
    console.log(`You produce ${percentage} percent less biscuits.`);
}






}

solve([65,12,26000]);