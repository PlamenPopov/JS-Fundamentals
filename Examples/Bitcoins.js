function solve(input) {
    let num=input.map(Number);
    
    let days=[];
    let bitcoin=11949.16;
    let bitcoinCount=0;
    let gold=67.51;
    let lv=0;

    for (let i = 1; i <= num.length; i++) {
        if(i%3==0){
           lv+=(num[i-1]*0.7)*gold;
        }else{
            lv+=num[i-1]*gold;
        }
        if(lv>bitcoin){
            while (lv>bitcoin) {
                bitcoinCount++;
                lv-=bitcoin;
            }
           days.push(i);
        }
    }
    let day=days.shift();
    
    if(days.length>0){
        console.log(`
        Bought bitcoins ${bitcoinCount}\n
        Day of the first purchased bitcoin: ${day}\n
        Money left: ${lv.toFixed(2)}
        `)
    }else{
        console.log(`
        Bought bitcoins ${bitcoinCount}\n
        Money left: ${lv.toFixed(2)}
    `)
    }
    

}

solve([100,200,300])