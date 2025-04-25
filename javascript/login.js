// script.js
document.getElementById('showSignup').addEventListener('click', function () {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.add('active');
});

document.getElementById('showLogin').addEventListener('click', function () {
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
});

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login Successful!');
});

document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Signup Successful!');
});
