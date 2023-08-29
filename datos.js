
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

function mostrar() {
     document.getElementById("quest").innerHTML = encuestas;

    
}