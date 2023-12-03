document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Simulated registration (replace with actual registration logic)
      // For demo purposes, just log the registered user's details
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
  
      // After successful registration, you might redirect to a login page or dashboard
      // window.location.href = 'login.html';
    });
  });
  
  function resetPassword() {
    // Get the email entered by the user
    const email = document.getElementById('email').value;
    // Additional fields like security questions, token, etc., if applicable
  
    // Validate the entered email or additional fields (if present)
  
    // Perform API request to the server for password reset
    // This is a simplified example; the actual request should be made to a secure server endpoint
    // For demonstration purposes, simulate a successful password reset
    simulatePasswordReset(email);
  }
  
  // Simulated function for password reset API request
  function simulatePasswordReset(email) {
    // Simulate a delay to mimic API request/response time (remove this in a real implementation)
    setTimeout(() => {
      // Simulate a successful response from the server (replace with actual backend communication)
      const success = true; // Change this condition based on server response
  
      if (success) {
        // Password reset was successful
        alert('Password reset successful! Please check your email for instructions.');
        // Optionally, redirect the user to a login page or another destination
        // window.location.href = 'login.html';
      } else {
        // Password reset failed, show an error message
        alert('Password reset failed. Please try again.');
      }
    }, 1000); // Simulated delay of 1 second (1000 milliseconds)
  }
  