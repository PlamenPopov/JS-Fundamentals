function solve(input) {
    
    console.log(arguments)
    for (let i = 0; i< input.length; i+=3) {
        let x=input[i];
        let y=input[i+1];
        let z=input[i+2];

        if(inVol(x,y,z)){
            console.log("Inside")
        }else{
            console.log('Outside')
        }
    }


    function inVol(x,y,z){
       let x1=10; let x2=50;
       let y1=20; let y2=80;
       let z1=15; let z2=50;

       if(x>=x1 && x<=x2){
           if(y>=y1 && y<=y2){
               if(z>=z1 && z<=z2){
                   return true;
               }
           }
       }

       return false;

    }
 
}

solve(['13.1','50','31.5','50','80','50','-5','18','43']);