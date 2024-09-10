// JavaScript for handling form submission (if needed)
// Currently, just logs the username to the console

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const username = document.getElementById('username').value;
    console.log('Username:', username);
    // Here you can add code to handle login, e.g., send username to server
});
