function solve(arr=[]) {
  
  let collections={};
  let unlikeCounter=0;

  for (const commands of arr) {
      let [command,name,food]=commands.split('-');
     
      if (command==='Like') {
          if(collections[name]){
            if(!collections[name].includes(food)){
              collections[name].push(food)
            }
          }else{
            collections[name]=[]
            collections[name].push(food)
          }
      }else if(command==='Unlike'){
        if(collections[name] && collections[name].includes(food)){
          let index=collections[name].indexOf(food);
          collections[name].splice(index,1);
          unlikeCounter++;
          console.log(`${name} doesn't like the ${food}.`);
        }else if(!collections[name]){
          console.log(`${name} is not at the party.`); 
        }else if(!collections[name].includes(food)){
          console.log(`${name} doesn't have the ${food} in his/her collection.`);
          
        }
      }else{
        break;
      }
  }

  let guestsInfo=Object.entries(collections)

  let sortedInfo=guestsInfo.sort((a,b)=>{
      if(b[1].length == a[1].length){
         return a[0].toLocaleCompare(b[0])
      }else{
        return b[1].length - a[1].length;
      }
  })

  for (const guestArr of sortedInfo) { 
    console.log(`${guestArr[0]}: ${guestArr[1].join(', ')}`);
  }
   console.log(`Unliked meals: ${unlikeCounter}`);
}

solve([
  'Like-Krisi-shrimps',
  'Like-Krisi-shrimps',
  'Unlike-Vili-carp',
  'Unlike-Krisi-salad',
  'Unlike-Krisi-shrimps',
  'Stop'
  ])