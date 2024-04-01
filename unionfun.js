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
var s1 = {
    rollno: 101,
    name: "Sidra",
    age: 20,
    marks: [80, 75, 90]
};
var showstudent = function (stud) {
    return stud.name;
};
var marksview = function (m) {
    var sum = 0;
    for (var i in m.marks) {
        sum += m.marks[i];
    }
    return sum;
};
console.log("name of the student:" + showstudent(s1));
console.log("sum of the marks:" + marksview(s1));
