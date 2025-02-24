
let isLogin = false;

function showLogin() {
    document.getElementById('formContainer').style.transform = 'translateX(-50%)';
    isLogin = true;
}

function showRegister() {
    document.getElementById('formContainer').style.transform = 'translateX(0)';
    isLogin = false;
}

function registerUser() {
    let name = document.getElementById('regName').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill all fields');
        return;
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Registration successful! You can now log in.');
    showLogin();
}

function loginUser() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let storedEmail = localStorage.getItem('userEmail');
    let storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful! Redirecting to dashboard.');
        window.location.href = 'dashboard.html';
    } else {
        let form = document.getElementById('loginForm');
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
        alert('Invalid email or password.');
    }
}

function togglePassword(id, element) {
    let input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
        element.classList.remove('eye-closed');
        element.classList.add('eye-open');
    } else {
        input.type = 'password';
        element.classList.remove('eye-open');
        element.classList.add('eye-closed');
    }
}

document.getElementById('regPassword').addEventListener('input', function() {
    let strength = document.getElementById('passwordStrength');
    let value = this.value;

    if (value.length < 4) {
        strength.innerHTML = 'Weak';
        strength.style.color = 'red';
    } else if (value.length < 8) {
        strength.innerHTML = 'Medium';
        strength.style.color = 'orange';
    } else {
        strength.innerHTML = 'Strong';
        strength.style.color = 'green';
    }
});
