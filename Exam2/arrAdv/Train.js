function solve(input) {

    let wagonCount=input
    .shift()
    .split(',')
    .map(Number);

    let maxCapacity=input.shift();
    maxCapacity=Number(maxCapacity);
    let commands;
    let command;
    let passagers;
    

    for (let i = 0; i < input.length; i++) {
        commands = input[i].split(' ');
        if(commands.length>1){
           command=commands[0];
           passagers=+commands[1]
        }  
        command=commands[0]
        if(command==="Add"){
            add(passagers);
        }else{
            command=Number(command);
            
            for (let j = 0; j < wagonCount.length; j++) {
               if (wagonCount[j]+command<=maxCapacity) {
                   wagonCount[j]+=command;
                   break;
               }
                
            }
        }
        
    }
    
    function add(num) {
        wagonCount.push(num);
        
    }

   console.log(wagonCount.join(' '))

    
}

solve(['32,54,21,12,4,0,23','75','Add 10','Add 0','30','10','75'])