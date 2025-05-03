// Simulamos el almacenamiento de usuarios (puedes cambiar esto por una base de datos real o almacenamiento persistente)
let users = JSON.parse(localStorage.getItem('users')) || {};

// Función para registrar un nuevo usuario
function registerUser() {
  const username = document.getElementById('regUser').value;
  const password = document.getElementById('regPass').value;
  const password2 = document.getElementById('regPass2').value;

  // Verifica si el nombre de usuario ya existe
  if (users[username]) {
    return alert('El nombre de usuario ya está registrado. Elige otro.');
  }

  // Verifica si las contraseñas coinciden
  if (password !== password2) {
    return alert('Las contraseñas no coinciden');
  }

  // Registrar al nuevo usuario con saldo inicial de 100 CamaPoints
  users[username] = {
    password: password,
    points: 100
  };

  // Guardar la información del usuario en el almacenamiento local (puedes cambiarlo por un backend)
  localStorage.setItem('users', JSON.stringify(users));

  // Redirige a la página de inicio de sesión
  window.location.href = 'index.html';
}

// Función para iniciar sesión
function loginUser() {
  const username = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPass').value;

  // Verifica si el usuario existe
  if (!users[username]) {
    return alert('Usuario no registrado');
  }

  // Verifica si la contraseña es correcta
  if (users[username].password !== password) {
    return alert('Contraseña incorrecta');
  }

  // Si todo es correcto, guarda el usuario logueado en el localStorage
  localStorage.setItem('currentUser', username);

  // Redirige a la página del dashboard
  window.location.href = 'dashboard.html';
}

// Función para obtener el usuario actual logueado
function getCurrentUser() {
  return localStorage.getItem('currentUser');
}

// Función para actualizar la interfaz con el nombre y puntos del usuario logueado
function updateUserInfo() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return window.location.href = 'index.html'; // Redirige si no hay sesión iniciada
  }

  document.getElementById('usernameDisplay').textContent = currentUser;
  document.getElementById('pointsDisplay').textContent = users[currentUser].points + ' CamaPoints';
}

// Función para salir de la sesión
function logoutUser() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// Inicializar datos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      loginUser();
    });
  }

  if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', (e) => {
      e.preventDefault();
      registerUser();
    });
  }

  if (document.getElementById('logoutButton')) {
    document.getElementById('logoutButton').addEventListener('click', logoutUser);
  }

  if (document.getElementById('usernameDisplay')) {
    updateUserInfo();
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
// ... (todo tu código actual)

// Agregar al final:
document.addEventListener("DOMContentLoaded", () => {
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const loggedUser = localStorage.getItem("loggedUser");

  if (!loggedUser || !users[loggedUser]) {
    alert("No has iniciado sesión.");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("usernameDisplay").textContent = loggedUser;
  document.getElementById("pointsDisplay").textContent = `${users[loggedUser].points} CamaPoints`;
});
