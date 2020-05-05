function solve(array) {

        let names=array
        .shift()
        .split(', ')
        .reduce((acc,curr)=>{
           acc[curr]=0;
           return acc;
        },{})

        let pattern=/([^a-zA-Z]+)/gm;
        let patternKM=/\d/gm
        let lines=array.slice(0,array.indexOf('end of race'));
    
        for (const x of lines) {
            let extractName=Array.from(x.replace(pattern,"")).join(''); 
            let extractKm=Array.from(x.matchAll(patternKM));
            let sum=extractKm.reduce((acc,curr)=>{
                return acc + +curr;
            },0); 

            for (const key in names) {
                if (key===extractName) {
                    names[key]+=sum
                }  
            }  
            }

            let output=Object.entries(names).sort((a,b)=>{
                return b[1]-a[1]
            });

            console.log(`1st place: ${output[0][0]}\n2nd place: ${output[1][0]}\n3rd place: ${output[2][0]}`);
            
        
        

}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ])