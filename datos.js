
let bd;

function iniciarbasededatos(){
    let BtnGuardar=document.querySelector("#btn-guardar");
    BtnGuardar.addEventListener("click", AlmacenarRespuesta);

    let solicitud=indexedDB.open("respuesta-de-encuesta");

    solicitud.addEventListener("error", MostrarError);
    solicitud.addEventListener("success", Comenzar);
    solicitud.addEventListener("upgradeneeded", CrearAlmacen);
}
function MostrarError(evento){
    alert("tenemos un error: " + evento.code +" / "+ evento.message);
}
function Comenzar(evento){
    bd = evento.target.result;
    console.log("funcion comenzar");
}
function CrearAlmacen(evento){
    let basededatos = evento.target.result;
    let almacen = basededatos.createObjectStore("respuestas", {keypath: "nombre"});
    almacen.createIndex("BuscarRespuestas", "semestre", {unique: false});
    console.log("funcion crear almacen");
}

function AlmacenarRespuesta(){
    let N = document.querySelector("#nombre").value;
    let S = document.querySelector("#semestre").value;
    let L = document.querySelector("#lenguage").value;
    let Re1 = document.querySelector("#R1").value;
    let Re2 = document.querySelector("#R2").value;
    let Re3 = document.querySelector("#R3").value;
    let Re4 = document.querySelector("#R4").value;
    let rol = document.querySelector("#select").value;
    let int = document.querySelector("#interes").value;

     //indica donde se va a almacenar el objeto y de que tipo es
    let transaccion = bd.transaction([respuestas], "readwrite");
    let almacen = transaccion.objectStore("respuestas");


    //almacenar objeto
    almacen.add({
                 Nombre: N,
                 semestre: S,
                 Lenguaje: L,
                 Respuesta1: Re1,
                 Respuesta2: Re2,
                 Respuesta3: Re3,
                 Respuesta4: Re4,
                 roles: rol,
                 intereses: int

})


    document.querySelector("#Nombre").value="";
    document.querySelector("#Semestre").value="";
    document.querySelector("#Lenguage").value="";
    document.querySelector("#R1").value="";
    document.querySelector("#R2").value="";
    document.querySelector("#R3").value="";
    document.querySelector("#R4").value="";
    document.querySelector("#selecct").value="";
    document.querySelector("#interes").value="";

}

window.addEventListener("load",iniciarbasededatos);
