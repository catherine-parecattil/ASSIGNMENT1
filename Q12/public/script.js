document.getElementById('registerBtn').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the default form submission (page reload)

    const fullname = document.getElementById('studname').value;
    const email = document.getElementById('studemail').value;
    const password = document.getElementById('studpassword').value;
    const confirm = document.getElementById('studconfirm').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const course = document.getElementById('studcourse').value;
    const year = document.getElementById('studyear').value;
    const skills = Array.from(document.querySelectorAll('.skill:checked')).map(skill => skill.value);
    const msg = document.getElementById('msg');

    // Basic validation
    if (password !== confirm) {
        msg.style.color = 'red';
        msg.textContent = 'Passwords do not match.';
        return;
    }

    const newStudent = { fullname, email, gender, course, year, skills };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudent),
        });

        const result = await response.json();

        if (response.ok) {
            msg.style.color = 'green';
            msg.textContent = result.message;
        } else {
            msg.style.color = 'red';
            msg.textContent = result.error || 'Registration failed.';
        }
    } catch (error) {
        msg.style.color = 'red';
        msg.textContent = 'Error: Could not connect to the server.';
        console.error('Fetch error:', error);
    }
});