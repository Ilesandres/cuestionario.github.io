// Array para almacenar los datos de encuestas
let encuestas = [];

// Función para guardar los datos de la encuesta
function guardar() {
    let nombre = document.getElementById("nombre").value;
    let semestre = document.getElementById("semestre").value;
    let respuestas = [
        document.getElementById("R0").value,
        document.getElementById("R1").value,
        document.getElementById("R2").value,
        document.getElementById("R3").value,
        document.getElementById("R4").value,
        document.getElementById("selected").value,
        document.getElementById("interes").value
    ];

    let encuesta = {
        nombre: nombre,
        semestre: semestre,
        respuestas: respuestas
    };

    encuestas.push(encuesta);

    // Mostrar mensaje de éxito (puedes personalizar esto según tu diseño)
    alert("Encuesta guardada con éxito");
    console.log(encuesta);

    // Limpiar campos después de guardar
    limpiarCampos();

    // Mostrar encuesta
    mostrar();
}

// Función para limpiar los campos del formulario después de guardar
function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("semestre").value = "";
    document.getElementById("R0").value = "";
    document.getElementById("R1").value = "";
    document.getElementById("R2").value = "";
    document.getElementById("R3").value = "";
    document.getElementById("R4").value = "";
    document.getElementById("selected").value = "";
    document.getElementById("interes").value = "";
}

// Función para mostrar la encuesta 

function mostrar() {
    let listaEncuestas = document.getElementById("quest");
    listaEncuestas.innerHTML = ""; // Limpiar contenido previo

    for (let i = 0; i < encuestas.length; i++) {
        let encuesta = encuestas[i];
        let encuestaHTML = `
            <div class="encuesta">
                <p><b>Nombre:</b> ${encuesta.nombre}</p>
                <p><b>Semestre:</b> ${encuesta.semestre}</p>
                <p><b>Respuestas:</b></p>
                <ul>
                    <li>${encuesta.respuestas[0]}</li>
                    <li>${encuesta.respuestas[1]}</li>
                    <li>${encuesta.respuestas[2]}</li>
                    <li>${encuesta.respuestas[3]}</li>
                    <li>${encuesta.respuestas[4]}</li>
                    <li>${encuesta.respuestas[5]}</li>
                    <li>${encuesta.respuestas[6]}</li>
                </ul>
            </div>
            <hr>
        `;
        listaEncuestas.innerHTML += encuestaHTML;
    }
}