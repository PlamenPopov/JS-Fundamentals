function solve(password=[]) {


let isValidLength=(passLength)=>{

let isValid=true;

if(passLength<6 || passLength.length>10){
    isValid=false;
}
   return isValid;
};
function isBetweenRange(ch,start,end) {
    return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0)
}

function containsOnlylettersandDigit(pass) {
    let isValid=true;
    
    for (const ch of pass) {
        if(!(
            isBetweenRange(ch,'A','Z')||
            isBetweenRange(ch,'a','z')||
            isBetweenRange(ch,'0','9')
        ))
        isValid=false;
    }
        return isValid;
    }
55

function containLeastTwoDigits(pass) {
    let digitCounter=0;

    for (const ch of pass) {
       if(isBetweenRange(ch,'0','9')){
           digitCounter++;

           if(digitCounter===2){
               break;
           }
       }
    }
    return digitCounter === 2 ? true : false;
}

let isValidPassVal=isValidLength(password.length);
if(!isValidPassVal){
    console.log('The password must be between 6 ana 10 characters !');
}

let containsOnlyLandDVal=containsOnlylettersandDigit(password);
if(!containsOnlyLandDVal){
    console.log('Password must contains only letters and digits');
}

let containsTwoDigitsVal=containLeastTwoDigits(password);
if(!containsTwoDigitsVal){
    console.log("Password must have at least 2 digits");
}


if(isValidPassVal && containsOnlyLandDVal && containsTwoDigitsVal ){
    console.log('Password is valid !');
    
}

}

solve('login555')