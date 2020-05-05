function solve(arr=[]) {
   
    let map=new Map();
   
    for (string of arr) {
        let tokens=string.split(' ');
        let name=tokens[0];
        let grades=tokens.splice(1,tokens.length).map(Number)
        

        
        if(!map.has(name)){
            map.set(name,[]);
            map.set(name,map.get(name).concat(grades));
            
        }else{
            map.set(name,map.get(name).concat(grades));
        }    
    }


   let sorted=Array.from(map).sort((a,b)=>avarage(a,b));

   function avarage(a,b) {
       let aSum=0;
       for (let i = 0; i < a[1].length; i++) {
           aSum+=a[1][i]    
       }

       let bSum=0;
       for (let i = 0; i < b[1].length; i++) {
           bSum+=b[1][i]    
       }

       let aAvarage=aSum/a[1].length;
       let bAvarage=bSum/b[1].length;
       return aAvarage-bAvarage;


   }

    for (const i of sorted) {
        console.log(`${i[0]}: ${i[1].join(', ')}`)
    }
    
}

solve(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 4 3 2',

'Tim 6 6'])