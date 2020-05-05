function solve(array) {
    
    array.pop();
    let chat={};


   for (const commands of array) {
       let tokens=commands.split('->');
       let [command,name,text]=[...tokens];

       switch (command) {
           case 'Add':
            if(chat[name]){
                console.log(`${name} is already registered`);     
            }else{
                chat[name]=[];
            }
               break;
               case 'Send':
                   if(chat[name]){
                       chat[name].push(text)
                   }
                   break;
                   case 'Delete':
                    if(chat[name]){
                           delete chat[name] ;
                    }else{
                        console.log(`${name} not found!`);
                    }
                       break;
           default:
               break;
       }

    }

    let chatArr=Object.entries(chat)

    let result=chatArr.sort((a,b)=>{
        if(b[1].length == a[1].length){
            return a[0].toLocaleCompare(b[0])
        }else{
            return b[1].length - a[1].length
        }
    })
   
    console.log(`Users count: ${result.length}`);
    for (const user of result) {
        console.log(user[0]);
        for (const mail of user[1]) {
            console.log(`- ${mail}`);  
        }
        
    } 
}

solve(
    [
        'Add->Mike',
        'Add->George',
        'Send->George->Hello World',
        'Send->George->Some random test mail',
        'Send->Mike->Hello, do you want to meet up tomorrow?',
        'Send->George->It would be a pleasure',
        'Send->Mike->Another random test mail',
        'Statistics'
      ])
  