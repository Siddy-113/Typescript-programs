//example for intersection type

type Course={
    cid:number;
    cname: string;
}

type teacher={
    tid:number;
    tname:string;
}


//creating 3rd type by using intersection
type teachercourse=Course & teacher

let tc: teachercourse={
    cid:101,
    cname:"angular",
    tid:201,
    tname:"abc",
}

console.log("teacher details and course details");
console.log("Course id:" + tc.cid);
console.log("Course name:" + tc.cname);
console.log("Teacher id:" + tc.tid);
console.log("Teacher Name:" + tc.tname);
