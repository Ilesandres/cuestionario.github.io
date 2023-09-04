

let preguntas = [
    "Nombre",
    "¿cual es tu rol en la institucion?",
    "ingrese el semestre ",
    "¿Qué te inspiró a estudiar ingeniería de sistemas?",
    "¿Cuál es la importancia que le das a las pruebas y la calidad del código en tus proyectos de desarrollo?",
    "Cómo crees que la inteligencia artificial y el aprendizaje automático están impactando el campo de la ingeniería en sistemas y desarrollo de software?",
    "¿Qué consejo le darías a estudiantes que recién comienzan su carrera en ingeniería en sistemas y desarrollo de software?",
    "¿Qué lenguajes de programación te sientes más cómodo utilizando en tus proyectos de desarrollo de software?",
    "¿Cuál es tu interes en la carrera?",
    "¿Prefieres trabajar en proyectos de desarrollo de software de forma individual o en equipo? ¿Por qué?",
    "¿Qué área de la ingeniería en sistemas te resulta más atractiva: desarrollo de aplicaciones, seguridad informática, inteligencia artificial, bases de datos, ¿o alguna otra?",
    "¿Qué tipo de proyectos te gustaría ver implementados en la industria tecnológica para abordar problemas sociales o medioambientales?",
    "¿Qué rol crees que juegan la ética y la responsabilidad en el desarrollo de software? ",
    " ¿Qué habilidades consideras que son esenciales para un ingeniero en sistemas y desarrollo de software en un entorno laboral actual?",
    " ¿en programación en la nube que beneficio miras que tiene en la sociedad actual?",
    "¿Qué consejos tienes para alguien que esté considerando una carrera en ingeniería en sistemas?",
    "¿Qué aspectos del desarrollo de software te llaman la atención y te motivaron a elegir esta carrera?",
    "¿Has tenido experiencias previas relacionadas con la programación o el desarrollo de software que influyeron en tu elección?",
    ")segun usted cual es el mejor lenguage para programar",
    "¿Qué te emociona más sobre la posibilidad de crear aplicaciones o sistemas desde cero?",
    "¿Tienes algún modelo a seguir en la industria del desarrollo de software que te haya inspirado a seguir esta carrera?",
    "¿Cómo te sientes acerca de la constante evolución y cambio en la tecnología y cómo afecta al desarrollo de software?",
    "¿Qué habilidades personales o técnicas crees que son esenciales para tener éxito en esta carrera?",
    "¿Has considerado cómo el desarrollo de software podría contribuir a resolver problemas específicos que te interesan?",
    "¿Te atrae más el aspecto creativo de diseñar soluciones o el aspecto técnico de la programación en sí?",
    "¿Has investigado las oportunidades laborales y el potencial de crecimiento en la industria del desarrollo de software?",
    "¿Cómo te sientes acerca de la colaboración en equipo, la resolución de problemas y los desafíos que surgen en el desarrollo de software?",
    "¿Has pensado en cómo la carrera de desarrollo de software se alinea con tus valores personales y metas a largo plazo?",
    "¿Cuál es tu enfoque para mantener tus habilidades actualizadas en un campo que evoluciona rápidamente?",
    "¿Te atraen más las aplicaciones móviles, el desarrollo web, la inteligencia artificial u otras áreas de desarrollo de software?",
    "¿Has considerado cómo el desarrollo de software puede ser una herramienta para innovar y transformar industrias existentes?"
];

function ocultar() {
    if (sessionStorage.getItem('usuario')) {
        document.getElementById("btn-mostrar").style.visibility = 'visible';
        document.getElementById("cerrarses").innerHTML = "cerrar";
         
    } else {
        document.getElementById("btn-mostrar").style.visibility = 'hidden';
    }
       
    for(let h=0; h<preguntas.length; h++){
        document.getElementById(h+1).innerHTML +=preguntas[h];
    };

}

let encuestas = [];



// Función para guardar los datos de la encuesta
function guardar() {
         let nombre = document.getElementById("nombre").value;
         let rol = document.getElementById("selected").value;
         let semestre = document.getElementById("semestre").value;
         let respuesta1 = document.getElementById("R0").value
         let respuesta2 =  document.getElementById("R1").value
         let respuesta3 =   document.getElementById("R2").value;
         let respuesta4 =   document.getElementById("R3").value;
         let respuesta5 =  document.getElementById("R4").value;
         let respuesta6 =   document.getElementById("R5").value;
         let respuesta7 =   document.getElementById("R6").value;
         let respuesta8 =   document.getElementById("R7").value;
         let respuesta9 =   document.getElementById("R8").value;
         let respuesta10 =   document.getElementById("R9").value;
         let respuesta11 =   document.getElementById("R10").value;
         let respuesta12 =   document.getElementById("R11").value;
         let respuesta13 =   document.getElementById("R12").value;
         let respuesta14 =   document.getElementById("R13").value;
         let respuesta15 =   document.getElementById("R14").value;
         let respuesta16 =   document.getElementById("R15").value;
         let respuesta17 =   document.getElementById("R16").value;
         let respuesta18 =   document.getElementById("R17").value;
         let respuesta19 =   document.getElementById("R18").value;
         let respuesta20 =   document.getElementById("R19").value;
         let respuesta21 =   document.getElementById("R20").value;
         let respuesta22 =   document.getElementById("R21").value;
         let respuesta23 =   document.getElementById("R22").value;
         let respuesta24 =   document.getElementById("R23").value;
         let respuesta25 =   document.getElementById("R24").value;
         let respuesta26 =   document.getElementById("R25").value;
         let respuesta27 =   document.getElementById("R26").value;
         let respuesta28 =   document.getElementById("R27").value;

    

    let encuesta = {
        nombre: nombre,
        rol: rol,
        semestre: semestre,
        respuesta1: respuesta1,
        respuesta2: respuesta2,
        respuesta3: respuesta3,
        respuesta4: respuesta4,
        respuesta5: respuesta5,
        respuesta6: respuesta6,
        respuesta7: respuesta7,
        respuesta8: respuesta8,
        respuesta9: respuesta9,
        respuesta10: respuesta10,
        respuesta11: respuesta11,
        respuesta12: respuesta12,
        respuesta13: respuesta13,
        respuesta14: respuesta14,
        respuesta15: respuesta15,
        respuesta16: respuesta16,
        respuesta17: respuesta17,
        respuesta18: respuesta18,
        respuesta19: respuesta19,
        respuesta20: respuesta20,
        respuesta21: respuesta21,
        respuesta22: respuesta22,
        respuesta23: respuesta23,
        respuesta24: respuesta24,
        respuesta25: respuesta25,
        respuesta26: respuesta26,
        respuesta27: respuesta27,
        respuesta28: respuesta28

    };

    encuestas.push(encuesta);

    alert("Encuesta guardada con éxito");
    console.log(encuestas);

    // Limpiar campos después de guardar
    limpiarCampos();
}

// Función para limpiar los campos del formulario después de guardar
function limpiarCampos() {
    document.getElementById("nombre").innerHTML = "";
    document.getElementById("semestre").innerHTML = "";
    document.getElementById("selected").innerHTML = "";
    for (let i = 0; i < preguntas.length; i++) {
        document.getElementById("R" + i).innerHTML = " ";
    }
}

// Función para mostrar las respuestas de las encuestas
function mostrar() {
    let datos = document.getElementById("datos");
    datos.innerHTML = ""; // Limpiar contenido anterior

    for (let i = 0; i < encuestas.length; i++) {
        datos.innerHTML += "<b>Encuesta " + (i + 1) + "</b><br>";
        datos.innerHTML += "Nombre: " + encuestas[i].nombre + "<br>";
        datos.innerHTML += "Semestre: " + encuestas[i].semestre + "<br>";
        datos.innerHTML += "rol: " + encuestas[i].rol + "<br>";
        datos.innerHTML += "Respuesta 1: " + encuestas[i].respuesta1 + "<br>";
        datos.innerHTML += "Respuesta 2: " + encuestas[i].respuesta2 + "<br>";
        datos.innerHTML += "Respuesta 3: " + encuestas[i].respuesta3 + "<br>";
        datos.innerHTML += "Respuesta 4: " + encuestas[i].respuesta4 + "<br>";
        datos.innerHTML += "Respuesta 5: " + encuestas[i].respuesta5 + "<br>";
        datos.innerHTML += "Respuesta 6: " + encuestas[i].respuesta6 + "<br>";
        datos.innerHTML += "Respuesta 7: " + encuestas[i].respuesta7 + "<br>";
        datos.innerHTML += "Respuesta 8: " + encuestas[i].respuesta8 +  "<br>";
        datos.innerHTML += "Respuesta 9: " + encuestas[i].respuesta9 + "<br>";
        datos.innerHTML += "Respuesta 10: " + encuestas[i].respuesta10 + "<br>";
        datos.innerHTML += "Respuesta 11: " + encuestas[i].respuesta11 + "<br>";
        datos.innerHTML += "Respuesta 12: " + encuestas[i].respuesta12 + "<br>";
        datos.innerHTML += "Respuesta 13: " + encuestas[i].respuesta13 + "<br>";
        datos.innerHTML += "Respuesta 14: " + encuestas[i].respuesta14 + "<br>";
        datos.innerHTML += "Respuesta 15: " + encuestas[i].respuesta15 + "<br>";
        datos.innerHTML += "Respuesta 16: " + encuestas[i].respuesta16 + "<br>";
        datos.innerHTML += "Respuesta 17: " + encuestas[i].respuesta17 + "<br>";
        datos.innerHTML += "Respuesta 18: " + encuestas[i].respuesta18 + "<br>";
        datos.innerHTML += "Respuesta 19: " + encuestas[i].respuesta19 + "<br>";
        datos.innerHTML += "Respuesta 20: " + encuestas[i].respuesta20 + "<br>";
        datos.innerHTML += "Respuesta 21: " + encuestas[i].respuesta21 + "<br>";
        datos.innerHTML += "Respuesta 22: " + encuestas[i].respuesta22 + "<br>";
        datos.innerHTML += "Respuesta 23: " + encuestas[i].respuesta23 + "<br>";
        datos.innerHTML += "Respuesta 24: " + encuestas[i].respuesta24 + "<br>";
        datos.innerHTML += "Respuesta 25: " + encuestas[i].respuesta25 + "<br>";
        datos.innerHTML += "Respuesta 26: " + encuestas[i].respuesta26 + "<br>";
        datos.innerHTML += "Respuesta 27: " + encuestas[i].respuesta27 + "<br>";
        datos.innerHTML += "Respuesta 28: " + encuestas[i].respuesta28 + "<br>";



       

        datos.innerHTML += "<hr>";
    }
}
