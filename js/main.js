document.addEventListener("DOMContentLoaded", () => {
  // Manejo de login
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      loginUser();
    });
  }

  // Manejo de registro
  if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', (e) => {
      e.preventDefault();
      registerUser();
    });
  }

  // Logout
  if (document.getElementById('logoutButton')) {
    document.getElementById('logoutButton').addEventListener('click', logoutUser);
  }

  // Mostrar info del usuario logueado (en dashboard)
  if (document.getElementById('usernameDisplay') && document.getElementById('pointsDisplay')) {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const loggedUser = localStorage.getItem("loggedUser");

    if (!loggedUser || !users[loggedUser]) {
      alert("No has iniciado sesión.");
      window.location.href = "login.html";
      return;
    }

    document.getElementById("usernameDisplay").textContent = loggedUser;
    document.getElementById("pointsDisplay").textContent = `${users[loggedUser].points} CamaPoints`;
  }
});

// Función para cambiar fondo
function toggleFondo() {
  let fondo = document.body.style.backgroundImage;
  if (fondo.includes('fondo1.jpg')) {
    document.body.style.backgroundImage = "url('assets/images/fondo2.jpg')";
  } else {
    document.body.style.backgroundImage = "url('assets/images/fondo1.jpg')";
  }
}
