function solve(array=[]) {
    
    let arr=array.slice(0);

    let str=arr.shift();
    let parts=str.split('|');
    let even=[];
    let odd=[];

    

    for (let i = 0; i < arr.length; i++) {
       let commands=arr[i].split(' ');
       let [move,direction,index]=[commands[0],commands[1],+commands[2]];
       
       if(move==="Move"){
         if(direction==='Right'){
             if(index !== parts.length-1){
                 let k=parts.splice(index,1);
                 parts.splice(index+1,0,k)
             }
         }else if(direction==="Left"){
             if(index !== 0){
                 let k=parts.splice(index,1);
                 parts.splice(index-1,0,k)
             }
         }
       }else if(move==="Check"){
          for (let i = 0; i < parts.length; i++) {
              if(i % 2 === 0){
                  even.push(parts[i]);

              }else{
                  odd.push(parts[i]);
              }   
          }
          if(direction==='Even'){
              console.log(even.join(' '))
          }else{
              console.log(odd.join(' '));   
          }
         
       }else{
           break;
       }    
    }

    console.log(`You crafted ${parts.join('')}!`);
    


}
solve(["ha|Do|mm|om|er",
'Move Right 0',
 'Move Left 3', 
 'Check Odd',
 'Move Left 2' ,
 'Move Left 10',
 'Move Left 0',
 'Done']);
