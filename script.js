document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Here, you would typically send the data to your server. For demonstration, we'll just show a confirmation message.
    document.getElementById('confirmationMessage').innerText = `Thanks for your interest, ${name}! We'll be in touch via email at ${email}.`;
    
    // Reset the form
    this.reset();
});
