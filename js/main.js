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
      
      // Verificar si los elementos existen antes de acceder a su valor
      const usernameInput = document.getElementById('registerUsername');
      const passwordInput = document.getElementById('registerPassword');
      const confirmPasswordInput = document.getElementById('registerConfirmPassword');

      if (usernameInput && passwordInput && confirmPasswordInput) {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
          alert("Las contraseñas no coinciden.");
          return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (users[username]) {
          alert("Ese nombre de usuario ya está registrado.");
          return;
        }

        // Registramos al usuario
        users[username] = {
          password: password,
          points: 100
        };

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedUser', username);
        window.location.href = "dashboard.html"; // Redirigimos al dashboard
      } else {
        alert("Error al encontrar los campos del formulario.");
      }
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
