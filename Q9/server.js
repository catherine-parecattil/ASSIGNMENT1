const s = require('./studentModule');
s.addStudent({ 
    id : 101,name: "Catherine P S",
    email: "catherine@gmail.com",
    gender: "Female",
    course: "MCA",
    year: "First",
    skills: "HTML" });
s.addStudent({ 
    id : 102,
    name: "Treesa",
    email: "treesa@gmail.com",
    gender: "Female",
    course: "MCA",
    year: "First",
    skills: "Python"});
const a = s.getAllStudents();
console.log("List of Students:");
console.log(a);
