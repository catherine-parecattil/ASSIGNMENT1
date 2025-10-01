const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});
app.use(express.static(path.join(__dirname)));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "student.html"));
});
let students = [];
app.post("/register", (req, res) => {
  const student = req.body;
  students.push(student);
  res.json({ message: "Student Registered Successfully" });
});
app.get("/students", (req, res) => {
  res.json(students);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
