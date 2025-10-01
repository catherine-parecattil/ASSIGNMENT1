const studentModel = require('../models/studentModel');

exports.registerStudent = (req, res) => {
    try {
        const student = req.body;
        studentModel.addStudent(student);
        res.status(200).json({ message: 'Student registered successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'Invalid student data.' });
    }
};

exports.getStudents = (req, res) => {
    const students = studentModel.getAllStudents();
    res.status(200).json(students);
};