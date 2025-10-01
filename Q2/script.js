var msge = "The form is valid";
var studname = "Catherine P S";
var studemail = "catherine@gmail.com";
var studgender = "Female";
var studcourse = "MCA";
var studyear = "First";
var studskills = "HTML";
var student = {
    name: studname,
    email: studemail,
    gender: studgender,
    course: studcourse,
    year: studyear,
    skills: studskills
};
function validateForm(student) {
    let c = true;
    if (!student.email || !student.email.includes("@gmail.com")) {
        console.log("Invalid Email address");
        c = false;
    }
    if (!student.gender) {
        console.log("Gender is required");
        c = false;
    }
    if (c) {
        console.log(msge);
    }

    return c;
}
console.log("Student details:", student);
var a = validateForm(student);
console.log(a);
