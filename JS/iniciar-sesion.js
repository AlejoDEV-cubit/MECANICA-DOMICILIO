document.getElementById("formulario-inicio-sesion").addEventListener("submit", function(event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Obtener el usuario registrado desde localStorage
    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioRegistrado && usuarioRegistrado.correo === correo && usuarioRegistrado.contrasena === contrasena) {
        // Guardar el nombre del usuario en localStorage para mostrarlo en la página principal
        localStorage.setItem("nombreUsuario", usuarioRegistrado.nombres);
        alert(`¡Bienvenido ${usuarioRegistrado.nombres}!, para regresar a la pagina principal undele al boton "volver pagina principal" ` );
        
        // Mostrar el botón de "Volver a Página Principal"
        document.getElementById("volver-principal").style.display = "block";
    } else {
        alert("Correo o contraseña incorrectos. Por favor, intenta nuevamente.");
    }
});
