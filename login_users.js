
let aux1;
let aux2;

let u=["Andres","andres","Ilesandres6","Emerson","emerson","1127070439"];
let p=["1127071568","1127071568","Nuncasapo12","1127070439","1127070439","1127070439"];

function logear(){
    
   
    let user=document.getElementById("usuario").value
    let pass=document.getElementById("contraseña").value;

    console.log(u[1]);
    console.log(p[1]);
    console.log("usuario ",user," contraseña ",pass);
    


    for(let i=0; i<=u.length; i++){
        if(user==u[i] && pass==p[i]){
            aux1=1;
            aux2=i;
            i=u.length;
        alert("Bienvenido "+u[aux2]);
            window.location = "datos_generales.html";
            guardarUsuarioEnSesion(u[aux2]);

            /*document.getElementById("usuario2").value=u[aux2];
            console.log(u[aux2])*/
        }else{
            aux1=0;
        }
    }

    if(aux1==0){
        alert("Usuario o contraseña incorrecta");
    }

    document.getElementById("usuario2").innerHTML=u[aux2];

    



}

function guardarUsuarioEnSesion(u) {
    sessionStorage.setItem('usuario', u[aux2]);
}

// Obtener nombre de usuario de sessionStorage
function obtenerUsuarioDeSesion() {
    return sessionStorage.getItem('usuario');
}

// Eliminar nombre de usuario de sessionStorage
function eliminarUsuarioDeSesion() {
    sessionStorage.removeItem('usuario');
}

function logout(){
    sessionStorage.removeItem('usuario');
}
function usuario(){
    console.log(sessionStorage.getItem('usuario'));
}
