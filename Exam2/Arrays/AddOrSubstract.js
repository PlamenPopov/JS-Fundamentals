function add(array) {
    
    let result=[] 
    let oldSum=0;
    let sum=0;


    
for (let i = 0; i < array.length; i++) {
    array[i]=Number(array[i]);
    oldSum+=array[i];
if(array[i] % 2 ===0){
    array[i]+=i;
    sum+=array[i];
    result.push(array[i]);
}else{
    array[i]-=i;
    sum+=array[i];
    result.push(array[i]);
}
}

console.log(result);
console.log(oldSum);
console.log(sum);

}

add([5,15,23,56,35]);