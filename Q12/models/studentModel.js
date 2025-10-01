let students = [];
exports.addStudent = (student) => {
    students.push(student);
};
exports.getAllStudents = () => {
    return students;
};