var msge = "The form is valid";
var studname = "Catherine P S";
var studemail = "catherinegmail.com";
var studgender = "Female";
var studcourse = "MCA";
var studyear = "First";
var studpass = "123";
var studconfirm = "1234";
var studskills = {
    Java: false,
    Python: false,
    HTML: false,
    JavaScript: false,
    "Node.js": false
};
var student = {
    name: studname,
    email: studemail,
    gender: studgender,
    course: studcourse,
    year: studyear,
    pass: studpass,
    confirm: studconfirm,
    skills: studskills
};
function validateForm(student) {
    let c = true;
    if (!student.email) {
        console.log("The Email is empty");
        c = false;
    } else if (!student.email.includes("@gmail.com")) {
        console.log("Invalid Email address");
        c = false;
    }

    if (student.pass !== student.confirm) {
        console.log("Passwords do not match");
        c = false;
    }
    let selectedSkills = [];
    for (let i in student.skills) {
        if (student.skills[i]) {
            selectedSkills.push(i);
        }
    }
    if (selectedSkills.length === 0) {
        console.log("Select at least one skill");
        c = false;
    }
    if (c) {
        console.log(msge);
        console.log("Skills:", selectedSkills);
    }
    return c;
}

console.log("Student details:", student);
var a = validateForm(student);
console.log(a);
