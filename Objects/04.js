function solve(firstName,secondName,hair) {
    
let person={
    firstName,
    secondName,
    hair,
}

let result=JSON.stringify(person,null,8);

console.log(result);


}

solve("George","Jones",'brown')