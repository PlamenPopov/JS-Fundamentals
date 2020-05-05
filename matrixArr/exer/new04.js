function solve(input) {

    function createGuest(arr) {
        let obj = {
            vip:[],
            regular:[]
        }

        for (const el of arr) {
            if(isNaN(Number(el[0]))){
               obj.regular.push(el) 
            }else{
                obj.vip.push(el)
            }
        }

        return obj;
    }

    function removeGuest(arr,list) {
        for (const x of arr) {
            if(list.vip.includes(x)){
                let index=list.vip.indexOf(x);
                list.vip.splice(index,1);
            }
            if(list.regular.includes(x)){
                let index=list.regular.indexOf(x);
                list.regular.splice(index,1);
            }
        }
        return list;
    }

    function getOutput(obj) {
        let output=obj.vip.concat(obj.regular);
        return output.length + "\n" + output.join("\n");
    }
    
     let index=input.indexOf('PARTY');
           
    let list=createGuest(input.slice(0,index));
    let removeList=removeGuest(input.slice(index+1,input.length),list);
  

    console.log(getOutput(removeList));
    
    
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