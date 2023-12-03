document.addEventListener('DOMContentLoaded'), function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  
    // Event listener for form submission
    forgotPasswordForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get the entered email for password reset
      const email = document.getElementById('emailInput').value;
  
      // Perform client-side validation (basic email format check)
      if (validateEmail(email)) {
        // Make an API request to trigger password reset
        resetPasswordRequest(email);
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    // Function to validate email format (basic check)
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
