function add(data=[]) {
    
    let result=[];
    let sum=0;
    let oldSum=0;

    data.map((number,index) => {
        number % 2 ===0 ? number += index : number -= index;
        result.push(number);
    });

    console.log(result);
    console.log(oldSum=data.reduce((a,b)=>{
        a+=b;
        return a;

    },0))
    console.log(sum=result.reduce((a,b)=>a+b,0))
    
}

add([5,15,23,56,35]);
