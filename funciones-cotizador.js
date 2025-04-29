// Este es el funciones-cotizador.js completo que debes usar

// Inicializar Firebase const firebaseConfig = { apiKey: "AIzaSyCj-tFpa5bOyezBhDk0UHe...", // <-- reemplaza con tu apiKey real authDomain: "cotizadorpremium-89a90.firebaseapp.com", projectId: "cotizadorpremium-89a90", storageBucket: "cotizadorpremium-89a90.appspot.com", messagingSenderId: "385182374319", appId: "1:385182374319:web:8d1f2..." // <-- reemplaza con tu appId real };

// Iniciar Firebase App firebase.initializeApp(firebaseConfig);

// Funciones de Registro e Inicio de Sesion function registrarUsuario(nombre, telefono, email, password) { firebase.auth().createUserWithEmailAndPassword(email, password) .then((userCredential) => { console.log("Usuario registrado:", userCredential.user); alert("Registro exitoso. Ahora inicia sesión."); }) .catch((error) => { console.error("Error en registro:", error); alert(error.message); }); }

function iniciarSesion(email, password) { firebase.auth().signInWithEmailAndPassword(email, password) .then((userCredential) => { console.log("Inicio de sesión exitoso:", userCredential.user); window.location.href = "cotizador.html"; // Redirecciona al cotizador }) .catch((error) => { console.error("Error al iniciar sesión:", error); alert("Correo o contraseña incorrectos"); }); }

// Llamadas para usar los formularios const formRegistro = document.getElementById("formRegistro"); const formLogin = document.getElementById("formLogin");

if (formRegistro) { formRegistro.addEventListener("submit", function(event) { event.preventDefault(); const nombre = document.getElementById("nombreRegistro").value; const telefono = document.getElementById("telefonoRegistro").value; const email = document.getElementById("emailRegistro").value; const password = document.getElementById("passwordRegistro").value; registrarUsuario(nombre, telefono, email, password); }); }

if (formLogin) { formLogin.addEventListener("submit", function(event) { event.preventDefault(); const email = document.getElementById("emailLogin").value; const password = document.getElementById("passwordLogin").value; iniciarSesion(email, password); }); }

                                                                                                            
