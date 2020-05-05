function solve(string) {
    
let person=JSON.parse(string);

for (const key in person) {

    console.log(` ${key} : ${person[key]}`);
    
}

}

solve('{"name":"George","age":"45","city":"Varna"}');