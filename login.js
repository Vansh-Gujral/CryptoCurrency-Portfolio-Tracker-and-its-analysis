const signupForm = document.getElementById('signupForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  window.location.href = 'index.html';
});

function validateEmail(email) {
  const regex = /^[\w-]+@[\w-]+.[a-zA-Z]+$/;
  return regex.test(email);
}
