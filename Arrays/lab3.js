function solve(input) {

   let arr=input.map(Number);
   let turns=arr.shift();
   
   
    console.log(arr.slice(0,turns).join(" "));
    console.log(arr.slice(arr.length-turns,arr.length).join(" "));

   
}
solve([3,
    6, 7, 8, 9])