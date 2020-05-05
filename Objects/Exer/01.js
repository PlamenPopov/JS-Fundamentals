function solve(arr) {
    
for (let i = 0; i < arr.length; i++) {
   let person={
       name:arr[i],
   }  
     
   for (const key in person) {
       console.log(`Name: ${person[key]} -- Personal Number: ${person[key].length}`);
       
   }
}
}

solve(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])