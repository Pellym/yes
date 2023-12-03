

  function performLogin() {
    // Display a message
    alert("Welcome! You've successfully logged in.");
  }

  // Wait for the document to be fully loaded
  document.addEventListener("DOMContentLoaded"), function() {
    // Get the button element by its ID
    var loginButton = document.getElementById("loginBtn");

    // Attach an event listener to the button
    loginButton.addEventListener("click", performLogin);
  }