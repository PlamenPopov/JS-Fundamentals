function solve(arr) {
    
for (let i = 0; i < arr.length; i++) {

   let el=arr[i];
   let[town,longitude,latitude] = el.split(' | ');



    let city={
      town:town,
      longitude:longitude,
      latitude:latitude,
    } 

    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
      }

    for (const el in city) {
        if(el==='longitude' || el==='latitude'){
            city[el]=financial(city[el])
        }
        
    }
   
    return city;
  } 
}

console.log(

solve(['Sofia | 42.292722 | 23.6655214',
'Beajing | 39.272727272 | 116.7272727']));