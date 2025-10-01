var msge = "The form is valid";
function validateForm(student) {
    let c = true;
    let error = "";

    if (!student.email || !student.email.includes("@gmail")) {
        error += "Invalid Email address<br>";
        c = false;
    }
    if (student.password !== student.confirm) {
        error += "Passwords do not match<br>";
        c = false;
    }
    if (student.skills.length === 0) {
        error += "Select at least one skill<br>";
        c = false;
    }

    if (c) {
        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").innerHTML = msge;
    } else {
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerHTML = error;
    }

    return c;
}
document.getElementById("registerBtn").addEventListener("click", function() {
    var student = {
        name: document.getElementById("studname").value,
        email: document.getElementById("studemail").value,
        gender: document.querySelector('input[name="gender"]:checked') ? 
                document.querySelector('input[name="gender"]:checked').value : "",
        course: document.getElementById("studcourse").value,
        year: document.getElementById("studyear").value,
        password: document.getElementById("studpassword").value,
        confirm: document.getElementById("studconfirm").value,
        skills: []
    };
    var skillBoxes = document.querySelectorAll(".skill");
    for (let i = 0; i < skillBoxes.length; i++) {
        if (skillBoxes[i].checked) {
            student.skills.push(skillBoxes[i].value);
        }
    }
    if (validateForm(student)) {
        var table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
        var row = document.createElement("tr");

        let values = [student.name, student.email, student.gender, student.course, student.year, student.skills.join(", ")];
        for (let val of values) {
            let cell = document.createElement("td");
            cell.textContent = val;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
});
