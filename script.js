// Get references to the buttons and forms
const userBtn = document.getElementById('user-btn');
const adminBtn = document.getElementById('admin-btn');
const userLogin = document.getElementById('user-login');
const adminLogin = document.getElementById('admin-login');
const passwordField = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

// Event listener for User Login button
userBtn.addEventListener('click', () => {
    userLogin.classList.add('active');
    adminLogin.classList.remove('active');
});

// Event listener for Admin Login button
adminBtn.addEventListener('click', () => {
    adminLogin.classList.add('active');
    userLogin.classList.remove('active');
});
// Sample JavaScript file for handling dynamic data or other interactions

// Example: On page load, fetch profile data or meeting details from an API if required
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript logic here if needed
});
//hide unhide password
togglePasswordButton.addEventListener('click', function () {
    // Toggle the type attribute between 'password' and 'text'
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Change the button text based on the visibility
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});
