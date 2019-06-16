function solve(input) {
    for (const order of input) {
        let split=order.split(", ");
        let insertMoney=+split[0];
        let drink=split[1];
        let drinkPrice=0;
        let all=0;

        if(drink==="coffee"){
            let choice=split[2];
            if(choice==="caffeine"){
             drinkPrice=0.80;
            }else{
                drinkPrice=0.90;
            }
            if(split.length>4 && split[3]==="milk"){
                drinkPrice+=(drinkPrice*0.1);
                sugar=+split[4];
                if(sugar!=0){
                    drinkPrice+=0.1;
                }
                }else{
                    sugar=+split[3];
                    if(sugar!=0){
                        drinkPrice+=0.1;
                    }
                }
        }else{
            drinkPrice=0.80;
            if(split.length>3 && input[2]==="milk"){
                drinkPrice=+(drinkPrice*0,1);
                sugar=+split[3];
                if(sugar!=0){
                    drinkPrice+=0.1;
                }
        }else{
            sugar=+split[2];
            if(sugar!=0){
                drinkPrice+=0.1;
            }
        }
    }
    console.log(`You order ${drink},price is ${drinkPrice}`)
    }
}

solve(
    ['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
);