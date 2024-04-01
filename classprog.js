var course = /** @class */ (function () {
    function course(cid, cname, cdeet) {
        this.coursecode = cid;
        this.coursename = cname;
        this.coursedetails = cdeet;
    }
    return course;
}());
var c1 = new course(101, "angular", "programming");
var c2 = new course(102, "MAD", "programming");
console.log("course 1 name: " + c1.coursename + " code:" + c1.coursecode + " details: " + c1.coursedetails);
console.log("course 2 name: " + c2.coursename + " code:" + c2.coursecode + " details: " + c2.coursedetails);
