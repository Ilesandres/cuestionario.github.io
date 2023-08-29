
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
    ]

    let encuesta = {
        nombre: nombre,
        semestre: semestre,
        respuestas: respuestas
    };

    encuestas.push(encuesta);
    console.log(encuesta);
   

    

    alert("Encuesta guardada con éxito");
    console.log(encuestas);

    // Limpiar campos después de guardar
    limpiarCampos();

    // Mostrar encuesta
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
// Función para mostrar los datos de las encuestas
function mostrar() {
    var questElement = document.getElementById("quest");
    questElement.innerHTML = ""; // Limpiar contenido previo

    for (var i = 0; i < encuestas.length; i++) {
        var encuesta = encuestas[i];
        var encuestaHTML = `
            <div class="encuesta">
                <p><strong>Nombre:</strong> ${encuesta.nombre}</p>
                <p><strong>Semestre:</strong> ${encuesta.semestre}</p>
                <p><strong>Respuestas:</strong></p>
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
        `;
        questElement.innerHTML += encuestaHTML;
    }
}

// Llamada a la función para mostrar los datos cuando sea necesario
// Por ejemplo, en un botón o evento


