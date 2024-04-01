// let x=10;

// let fun1=(n:number)=>{
//     if (n>0){
//         console.log("positive number")
//         if (n%2==0) {
//             console.log("even");
//         } else {
//             console.log("odd number");
//         } 
//     }else {
//         console.log("negative number");
//     }
// }

// console.log(fun1(-10));

let pos=(a)=>{
    if(a>0){
        return true;
    } else {
        return false;
    }
}

let oe=(b)=>{
    if(b=true && b%2==0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

console.log(oe(pos(-12)));