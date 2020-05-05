function solve(arr) {
    let count=arr.shift();
    
    for (const massage of arr) {
        let pattern=/!([A-Z][a-z]+)!:\[([a-zA-Z]+)\]/gm;

        let match=pattern.exec(massage);
         
        if(match && match[2].length>7){
         let char=match[2].split('').map((x)=>{
             return x.charCodeAt(0)
         })
         console.log(`${match[1]}: ${char.join(' ')}`);
        }else{
            console.log("The message is invalid"); 
        }
        
    }
}

solve([ '2', '!Send!:[IvanisHere]','*Time@:[Itis5amAlready]' ])