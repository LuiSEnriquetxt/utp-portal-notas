function iniciarSesion() {

    const correo = document.getElementById("correo").value;
    const clave = document.getElementById("clave").value;

    if (
        correo === "u26277929@utp.edu.pe" &&
        clave === "Lindes2204"
    ) {
        window.location.href = "inicio.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}