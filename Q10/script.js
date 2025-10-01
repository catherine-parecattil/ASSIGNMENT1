document.getElementById('registerBtn').addEventListener('click', async () => {
    const fullname = document.getElementById('studname').value;
    const email = document.getElementById('studemail').value;
    const password = document.getElementById('studpassword').value;
    const confirm = document.getElementById('studconfirm').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const course = document.getElementById('studcourse').value;
    const year = document.getElementById('studyear').value;
    const skills = Array.from(document.querySelectorAll('.skill:checked')).map(skill => skill.value);
    const msg = document.getElementById('msg');
    const studentTableBody = document.querySelector('#studentTable tbody');

    // Basic validation
    if (password !== confirm) {
        msg.style.color = 'red';
        msg.textContent = 'Passwords do not match.';
        return;
    }

    const newStudent = { fullname, email, gender, course, year, skills };

    try {
        // POST request to register the student
        const registerResponse = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudent),
        });
        const registerData = await registerResponse.json();

        if (registerResponse.ok) {
            msg.style.color = 'green';
            msg.textContent = registerData.message;

            // GET request to fetch the updated student list
            const studentsResponse = await fetch('/students');
            const students = await studentsResponse.json();

            // Clear the table body
            studentTableBody.innerHTML = '';

            // Populate the table with the new data
            students.forEach(student => {
                const row = studentTableBody.insertRow();
                row.insertCell(0).textContent = student.fullname;
                row.insertCell(1).textContent = student.email;
                row.insertCell(2).textContent = student.gender;
                row.insertCell(3).textContent = student.course;
                row.insertCell(4).textContent = student.year;
                row.insertCell(5).textContent = student.skills.join(', ');
            });
        } else {
            msg.style.color = 'red';
            msg.textContent = registerData.error || 'Registration failed.';
        }
    } catch (error) {
        msg.style.color = 'red';
        msg.textContent = 'Error: Could not connect to the server.';
        console.error('Fetch error:', error);
    }
});