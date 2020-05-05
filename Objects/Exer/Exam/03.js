function solve(array=[]) {
    let arr=array.slice(0);
    let cards=arr.shift();

   
    let deck=[];

    for (let i = 0; i < arr.length; i++) {
       let commands=arr[i].split(' ');
       let [command,card]=[commands[0],commands[1]];
       
       if(command==='Add'){
           if(cards.includes(card)){
             deck.push(card);
             
           }else{
               console.log('Card not found.');  
           }
       }
       if(command==='Insert'){
           if(cards.includes(card)){
               let index=commands[2];
              deck.splice(index,0,card);
              
           }else{
               console.log('Error!');
       }          
       }
       if(command==='Remove'){
           if(deck.includes(card)){
             let index=deck.indexOf(card);
             deck.splice(index,1); 
           }else{
            console.log('Card not found.');
           }
       }
       if(command==='Swap'){
         let cardTwo=commands[2];
         let firstIndex=deck.indexOf(card);
         let secondIndex=deck.indexOf(cardTwo);
         swap(firstIndex,secondIndex,deck)    
       }
       if(command==='Shuffle'){
         deck.reverse();
       }
       if(command==='Ready'){
           break;
       }
    }

    console.log(deck.join(' '));
    

    function swap(index,index2,arr) {
       let x=arr.splice(index,1);
       let y=arr.splice(index2,0,x);
       let z=y.join('');
       return z;
    }
    
}

solve(['Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'])