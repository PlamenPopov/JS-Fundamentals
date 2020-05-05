function solve(arr=[]) {
    
let array=arr.slice(0).sort((a,b)=>{
   if(a.length===b.length){
      return a.localeCompare(b);
   }else{
    return a.length-b.length;
   }
});



console.log(array);


}

solve(['alpha','beta','gamma'])