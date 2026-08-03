const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.toggle("activo-menu");

    });

}

const fecha = new Date();

const fechaElemento = document.getElementById("fecha");

if (fechaElemento) {

    fechaElemento.innerHTML = fecha.toLocaleDateString("es-PE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

}

const boton = document.getElementById("perfilBtn");

const menu = document.getElementById("menuPerfil");

if (boton && menu) {

    boton.onclick = () => {

        menu.style.display =
            menu.style.display === "block"
                ? "none"
                : "block";

    };

    window.onclick = (e) => {

        if (!boton.contains(e.target) && !menu.contains(e.target)) {

            menu.style.display = "none";

        }

    };

}