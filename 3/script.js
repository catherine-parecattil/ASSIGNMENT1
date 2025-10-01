const API_URL = "http://localhost:3000";
function validateForm(student) {
  if (!student.name || !student.email) return false;
  if (student.password !== student.confirm) return false;
  if (student.skills.length === 0) return false;
  return true;
}
function addStudentToTable(student) {
  const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
  const row = document.createElement("tr");
  const values = [student.name, student.email, student.gender, student.course, student.year, student.skills.join(", ")];
  values.forEach(val => {
    const cell = document.createElement("td");
    cell.textContent = val;
    row.appendChild(cell);
  });
  table.appendChild(row);
}
function fetchStudents(callback) {
  fetch(`${API_URL}/students`)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.error(err));
}
document.getElementById("registerBtn").addEventListener("click", () => {
  const student = {
    name: document.getElementById("studname").value,
    email: document.getElementById("studemail").value,
    gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "",
    course: document.getElementById("studcourse").value,
    year: document.getElementById("studyear").value,
    password: document.getElementById("studpassword").value,
    confirm: document.getElementById("studconfirm").value,
    skills: []
  };

  document.querySelectorAll(".skill").forEach(s => {
    if (s.checked) student.skills.push(s.value);
  });

  if (validateForm(student)) {
    fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("msg").style.color = "green";
      document.getElementById("msg").innerText = data.message;
      fetchStudents(students => {
        const tbody = document.querySelector("#studentTable tbody");
        tbody.innerHTML = "";
        students.forEach(s => addStudentToTable(s));
      });
    });
  } else {
    document.getElementById("msg").style.color = "red";
    document.getElementById("msg").innerText = "Form validation failed!";
  }
});
window.onload = () => {
  fetchStudents(students => {
    students.forEach(s => addStudentToTable(s));
  });
};
