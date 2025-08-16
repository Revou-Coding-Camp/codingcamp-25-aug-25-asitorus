// Fill "Hi Name" greeting
document.getElementById('nameBtn').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim();
  document.getElementById('user-greeting').textContent = name || 'Friend';
});

// Validate form & show values
document.getElementById('messageForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('messageText').value.trim();

  if (!username || !email || !message) return;

  document.getElementById('outName').textContent = username;
  document.getElementById('outEmail').textContent = email;
  document.getElementById('outMsg').textContent = message;

  document.getElementById('formOutput').classList.remove('hidden');
  e.target.reset();
});
