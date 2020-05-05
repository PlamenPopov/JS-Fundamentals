function solve(dataOne=[],dataTwo=[]) {
 
let thirdArray=[];

dataOne.map((element,i)=>{
    if(i % 2 === 0){
       thirdArray.push(Number(element)+Number(dataTwo[i]));
    }else{
        thirdArray.push(element+dataTwo[i]);
    }
})

console.log(thirdArray.join('-'));


}

solve(['5','15','23','56','35'],['17','22','87','36','11']);