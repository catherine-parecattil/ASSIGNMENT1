let s = [];
function addStudent(student) {
    s.push(student);
}
function getAllStudents() {
    return s;
}
module.exports = {
    addStudent,
    getAllStudents
};
