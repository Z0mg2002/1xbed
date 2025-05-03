document.addEventListener("DOMContentLoaded", () => {
  // Manejo de login
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      const users = JSON.parse(localStorage.getItem('users')) || {};

      if (users[username] && users[username].password === password) {
        localStorage.setItem('loggedUser', username);
        window.location.href = "dashboard.html"; // ✅ redirección al dashboard
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
  }

  // Manejo de registro
  if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('registerUsername').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('registerConfirmPassword').value;

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || {};

      if (users[username]) {
        alert("Ese nombre de usuario ya está registrado.");
        return;
      }

      users[username] = {
        password: password,
        points: 100
      };

      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loggedUser', username);
      window.location.href = "dashboard.html"; // ✅ redirección al dashboard
    });
  }

  // Logout
  if (document.getElementById('logoutButton')) {
    document.getElementById('logoutButton').addEventListener('click', () => {
      localStorage.removeItem('loggedUser');
      window.location.href = "login.html";
    });
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
