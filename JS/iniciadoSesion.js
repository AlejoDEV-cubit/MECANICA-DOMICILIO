document.addEventListener("DOMContentLoaded", () => {
    const usuarioInfo = document.getElementById("usuario-info");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const cerrarSesionBtn = document.getElementById("cerrar-sesion");
    const iniciarSesionBtn = document.getElementById("boton-iniciar-sesion");

    // Verifica si hay un usuario registrado en localStorage
    const usuarioRegistrado = localStorage.getItem("nombreUsuario");
    if (usuarioRegistrado) {
        nombreUsuario.textContent = `Usuario: ${usuarioRegistrado}`;
        nombreUsuario.style.display = "inline";
        cerrarSesionBtn.style.display = "inline";
        iniciarSesionBtn.style.display = "none"; // Oculta el botón de iniciar sesión
    }
});

function cerrarSesion() {
    // Elimina la información del usuario de localStorage
    localStorage.removeItem("nombreUsuario");
    // Recarga la página para volver al estado inicial
    location.reload();
}
