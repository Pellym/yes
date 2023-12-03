
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'example' && password === 'password') {
      window.location.href = 'dashboard.html';
    } else {
      const errorMessage = document.getElementById('error');
      errorMessage.textContent = 'Invalid username or password';
    }
  }
  