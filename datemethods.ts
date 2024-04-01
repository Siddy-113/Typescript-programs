let d:Date=new Date();
console.log(d);

let month:number=d.getMonth()+1;
let date:number=d.getDate();
let year:number=d.getFullYear();

let today:string = date + '/' + month + '/' + year;

console.log(today);