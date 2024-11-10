document.getElementById("formulario-registro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const verificarContrasena = document.getElementById("verificarContrasena").value;
    const genero = document.querySelector("input[name='genero']:checked").value;

    // Verificar que las contraseñas coincidan
    if (contrasena !== verificarContrasena) {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
        return;
    }

    // Guardar la información en localStorage
    const usuario = {
        nombres,
        apellidos,
        correo,
        contrasena,
        genero
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    // Redirigir a la página de iniciar sesión
    window.location.href = "../INICIAR-SESION/iniciarSesion.html";  // Asegúrate de que esta ruta es correcta
});
