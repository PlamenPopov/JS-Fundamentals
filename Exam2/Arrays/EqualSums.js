function solve(array=[]) {

let areEqual=false;

for (let i = 0; i < array.length; i++) {

    let rigthSum=0;
    let number=array[i];

    for (let j = array.length-1; j > i; j--) {
        let current=array[j];
        rigthSum+=current;
    }

    let leftSum=0;

    for (let b = 0; b < i; b++) {
        let current = array[b];
        leftSum+=current;
        
    }
    if(leftSum===rigthSum){
        console.log(i);
        areEqual=true;
        break;
    }
}

if(areEqual===false){
    console.log("No")
}
}

solve([1,2,3,3])