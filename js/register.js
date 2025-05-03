document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Obtener usuarios registrados
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username]) {
      alert("El nombre de usuario ya está registrado.");
      return;
    }

    // Guardar usuario nuevo con 100 CamaPoints
    users[username] = {
      password: password,
      points: 100
    };

    localStorage.setItem("users", JSON.stringify(users));
    alert("¡Registro exitoso!");

    // Redirigir a login.html
    window.location.href = "login.html";
  });
});
