function solve(arr) {
    let string=arr.shift();

    for (const commands of arr) {
        
      let [command,indexOne,indexTwo]=commands.split(' ');
      

     switch (command) {
            case 'Replace':
                for (const l of string) {
                    if(l===indexOne){
                        string=string.replace(indexOne,indexTwo)
                    }
                }
                console.log(string);
             break;
             case 'Cut':
             if(indexOne>=0 && indexTwo<=string.length){
                let arrStr=string.split('');
                arrStr.splice(indexOne,indexTwo);
                string=arrStr.join('');
                console.log(string);
                
             }else{
                 console.log(`Invalid indexes!`);   
             }
             break;
             case 'Make':
             if(indexOne==='Upper'){
               string=string.toUpperCase();
               console.log(string);
               
             }else{
                string=string.toLowerCase();
                console.log(string);
                
             }
             break;
             case 'Check':
             if(string.includes(indexOne)){
               console.log(`Message contains ${indexOne}`);
             }else{
               console.log(`Message doesn't contain ${indexOne}`);
             }
             break;
             case 'Sum':
                if(indexOne>=0 && indexTwo<=string.length){
                    let arrStr=string.split('');
                    let chars=arrStr.splice(indexOne,indexTwo).map((x)=>{
                        return x.charCodeAt(0)
                    })
                    let sum=chars.reduce((acc,curr)=>{
                        return acc+curr;
                    },0)
                    console.log(sum)
                 }else{
                     console.log(`Invalid indexes!`);   
                 }
             break;
     
         default:
             break;
     }
      

    }
   
    
}

solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ])