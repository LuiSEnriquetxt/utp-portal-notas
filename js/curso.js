const id = localStorage.getItem("cursoSeleccionado");

const curso = cursos.find(c => c.id === id);

if (!curso) {

    alert("No se encontró el curso.");

    window.location = "cursos.html";

}

document.getElementById("nombreCurso").textContent = curso.nombre;

document.getElementById("promedioCurso").textContent = curso.promedio;

document.getElementById("estadoCurso").textContent = curso.estado;

const tablaNotas = document.getElementById("tablaNotas");

curso.notas.forEach(nota => {

    tablaNotas.innerHTML += `

    <tr>

        <td>${nota[0]}</td>

        <td>${nota[1]}</td>

        <td>${nota[2]}</td>

        <td>${nota[3]}</td>

    </tr>

    `;

});

const botonNotas = document.getElementById("toggleNotas");

const panelNotas = document.getElementById("panelNotas");

botonNotas.addEventListener("click", () => {

    if (panelNotas.style.display === "block") {

        panelNotas.style.display = "none";

        botonNotas.innerHTML = "▼ Ver Calificaciones";

    } else {

        panelNotas.style.display = "block";

        botonNotas.innerHTML = "▲ Ocultar Calificaciones";

    }

});