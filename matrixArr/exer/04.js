function solve(arr=[]) {

    let invitedGests=[];
    let comingGuests=[];
    let lateG=[];

    for (const guest of arr) {
        if(guest==='PARTY'){
            break;
        }else{
            invitedGests.push(guest);
        }    
    }

    if(arr.includes('PARTY')){
        let index=arr.indexOf('PARTY');
        let validG=arr.splice(index,arr.length);
        validG.shift();
        for (const i of validG) {
            comingGuests.push(i);
        }
    }

    for (const i of invitedGests) {

        if(!comingGuests.includes(i)){
           
            if(isNaN(Number(i[0]))){
               lateG.unshift(i)
            }else{               
                lateG.push(i);
            }
        }
    }



    let result=lateG.sort((a,b)=>{
        a.toLowerCase();
        b.toLowerCase();

      return  a.localeCompare(b)})

    console.log(result.length);

    for (const i of result) {
        console.log(i);  
    }


    
    
}

solve(
    ['7IK9Yo0h',

    '9NoBUajQ',
    
    'Ce8vwPmE',
    
    'SVQXQCbc',
    
    'tSzE5t0p',
    
    'PARTY',
    
    '9NoBUajQ',
    
    'Ce8vwPmE',
    
    'SVQXQCbc'
    
    ]
)