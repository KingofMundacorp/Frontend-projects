document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Dummy authentication logic (replace it with your actual authentication logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        // Successful login
        alert('Login successful! Redirecting to another webpage...');
        window.location.href = 'MUNDAHIREV.01.html'; // Redirect to another webpage
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
