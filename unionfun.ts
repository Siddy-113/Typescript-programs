//simple union function 
// function printId(id:number | string){
//     if(typeof id=="string"){
//         console.log(id.toUpperCase());
//     }else{
//         console.log(id);
//     }
// }
// printId(101);
// printId("abc101");

//union function in object type

type student={
    rollno:number|string; //union type
    name:string;
    age:number;
    marks:number[];
}

let s1:student={
    rollno:101,
    name: "Sidra",
    age: 20,
    marks: [80,75,90]
};

const showstudent=(stud:student)=>{
    return stud.name
}

const marksview=(m:student)=>{
    let sum:number=0;
    for(let i in m.marks){
        sum+=m.marks[i];
    }
    return sum;
}

console.log("name of the student:" + showstudent(s1));
console.log("sum of the marks:" + marksview(s1));