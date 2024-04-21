// Función para cerrar sesión y cambiar el texto del botón
function cerrarSesion() {
    // Cambiar el texto del botón
    document.getElementById("cerrarSesionBtn").innerText = "Iniciar Sesión";
}

// Función para mostrar un mensaje de alerta cuando se da click en el botón de "Me gusta"
function meGusta() {
    alert("¡Te gusta esta publicación!");
}

// Función para ocultar el botón de "Agregar definición"
function ocultarAgregarDefinicion() {
    document.getElementById("agregarDefinicionBtn").style.display = "none";
}

// Asignar el evento onclick al botón "Cerrar Sesión"
document.getElementById("cerrarSesionBtn").onclick = cerrarSesion;

// Obtener todos los botones de "Me gusta"
var likeButtons = document.querySelectorAll(".likeBtn");

// Asignar la función meGusta() a cada botón de "Me gusta"
likeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        meGusta();
        // Aquí puedes agregar cualquier otra lógica relacionada con el botón de "Me gusta"
    });
});

// Asignar la función ocultarAgregarDefinicion() al botón "Agregar definición"
document.getElementById("agregarDefinicionBtn").onclick = ocultarAgregarDefinicion;