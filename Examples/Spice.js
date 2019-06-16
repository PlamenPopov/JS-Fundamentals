function solve(input){
  
 let dose=+input;
 let curDose=0;
 let all=0;
 let countDays=0;
 
 while (dose>=100) {
     curDose=dose-26;
     all+=curDose;
     dose-=10; 
     countDays++; 
    }

    all-=26;

    if(all<0){
        all=0;
    }
    console.log(countDays);
    console.log(all);
    
}

solve(450)