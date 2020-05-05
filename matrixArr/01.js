function solve(arr){

let array=arr.slice(0);
let phoneBook={};

for (let i = 0; i < array.length; i++) {

    let el=array[i].split(' ');
    let [name,tel]=[el[0],el[1]];
    phoneBook[name]=tel;
}

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);  
    }

}

solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])