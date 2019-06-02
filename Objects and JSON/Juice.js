function solve(input) { 
    
    let juiceFruit={};
    let bottles={};

    input.forEach(element => {
        let split=element.split("=>");
        let fruit=split[0];
        let ml=+split[1];

        if(!juiceFruit.hasOwnProperty(fruit)){
            juiceFruit[fruit]=0;
        }
        juiceFruit[fruit]+=ml;

        if(juiceFruit[fruit]>=1000){
          bottles[fruit]=Math.floor(juiceFruit[fruit]/1000);
        }

    });
    
    for (const key of Object.keys(bottles)) {
         console.log(`${key} => ${bottles[key]}`)
     }


 }

 solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549' 
 ]);