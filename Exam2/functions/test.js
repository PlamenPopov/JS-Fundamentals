function solve(num1,num2,operation) {
    
    
    let multiply=(x,y)=>x*y;
    let divide=(x,y)=>x/y;
    let add=(x,y)=>x+y;
    let substract=(x,y)=>x-y;

    let result;

    
    if(operation==='multiply'){
         result=multiply(num1,num2);
    } if(operation==='divide'){
         result=divide(num1,num2)
    } if(operation==='add'){
         result=add(num1,num2)
    }if(operation==='substract'){
         result=substract(num1,num2)
    }

    console.log(result)
}

solve(5,5,'substract');
