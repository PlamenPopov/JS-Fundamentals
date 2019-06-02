function solve(input) {

   let html='<table>\n';
   
   for(let row of input){
   let obj=JSON.parse(row);
   html+='<tr>\n';
   html+=`<td>${obj.name}</td>\n`;
   html+=`<td>${obj.position}</td>\n`;
   html+=`<td>${obj.salary}</td>\n`;
   html+='<tr>\n';
   }

    html+='</table>\n';

    

     console.log(html)
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',

'{"name":"Teo","position":"Lecturer","salary":1000}',

'{"name":"Georgi","position":"Lecturer","salary":1000}']);