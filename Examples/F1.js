function solve(input) {
    
let names=input[0];
let pilots=input[0].split(" ");

for (let i = 1; i < input.length; i++) {
    let split=input[i].split(" ");
     let action=split[0];
     let pilot=split[1];

     if(action=="Join"){
        if(!pilots.includes(pilot)){
            pilots.push(pilot);
        }
    }else if(action=="Crash"){
        if(pilots.includes(pilot)){
            let index=pilots.indexOf(pilot);
            pilots.splice(index,1)
        }
    }else if(action=="Pit"){
        if(pilots.includes(pilot)){
            let index=pilots.indexOf(pilot);            
            if(index!== pilots.length-1){
                pilots.splice(index,1);
                pilots.splice(index+1,0,pilot)
            }
        }
           
    
    }else if(action=="Overtake"){
        if(pilots.includes(pilot)){
            
            let index=pilots.indexOf(pilot);
            if(index!==0){
                pilots.splice(index,1);
                pilots.splice(index-1,0,pilot)
            }            
           
        }
        
        
    }
    
    
}
console.log(pilots.join(" ~ "))
    
   
}

solve(
    ["Vetel Hamilton Slavi",
"Pit Hamilton",
"Overtake Vetel",
"Crash Slavi"]
)