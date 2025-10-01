let students = [];
function validateForm(student) {
  if (
    student.name === "" ||
    student.email === "" ||
    student.password === "" ||
    student.confirm === "" ||
    student.course === "--Select--" ||
    student.year === "--Select--"
  ) {
    return false;
  }
  if (student.password !== student.confirm) {
    alert("Passwords do not match!");
    return false;
  }
  return true;
}
function registerStudent(callback) {
  var student = {
    name: document.getElementById("studname").value,
    email: document.getElementById("studemail").value,
    gender: document.querySelector('input[name="gender"]:checked')
      ? document.querySelector('input[name="gender"]:checked').value
      : "",
    course: document.getElementById("studcourse").value,
    year: document.getElementById("studyear").value,
    password: document.getElementById("studpassword").value,
    confirm: document.getElementById("studconfirm").value,
    skills: []
  };
  document.querySelectorAll(".skill").forEach(skillBox => {
    if (skillBox.checked) student.skills.push(skillBox.value);
  });

  if (validateForm(student)) {
    students.push(student); 
    let jsonData = JSON.stringify(student); 
    callback(student, jsonData);
  } else {
    document.getElementById("msg").style.color = "red";
    document.getElementById("msg").innerText = "Form validation failed!";
  }
}
function displayStudent(student, jsonData) {
  var table = document
    .getElementById("studentTable")
    .getElementsByTagName("tbody")[0];

  var row = document.createElement("tr");
  let values = [
    student.name,
    student.email,
    student.gender,
    student.course,
    student.year,
    student.skills.join(", ")
  ];

  values.forEach(val => {
    let cell = document.createElement("td");
    cell.textContent = val;
    row.appendChild(cell);
  });
  table.appendChild(row);
  document.getElementById("msg").style.color = "green";
  document.getElementById("msg").innerText = "Student JSON: " + jsonData;
}
document
  .getElementById("registerBtn")
  .addEventListener("click", function () {
    registerStudent(displayStudent);
  });
