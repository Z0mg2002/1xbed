// login.js

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("usernameLogin").value;
  const password = document.getElementById("passwordLogin").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Inicio de sesión exitoso");
    // Aquí podrías redirigir al dashboard o página principal
    window.location.href = "dashboard.html";  // o la página que desees
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
