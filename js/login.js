document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[username]) {
      alert("Usuario no encontrado.");
      return;
    }

    if (users[username].password !== password) {
      alert("Contraseña incorrecta.");
      return;
    }

    // Guardar sesión
    localStorage.setItem("loggedUser", username);

    // Redirigir al dashboard
    window.location.href = "dashboard.html";
  });
});
