function solve(data=[]) {
    
let acc=data.splice(data.length-1);
acc=Number(acc);
let shift='';

if(isNaN(acc)){
    console.log('Empty')
}else{
 
    for (let i = 1; i <=acc; i++) {
 
        shift=data.shift();
        data.push(shift);
   }
   
   console.log(data.join(' '));
   
}
}

solve(['Banana','Orange','Coconut','apple','15']);