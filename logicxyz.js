document.getElementById('stdform').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
    event.target.reset();
});
