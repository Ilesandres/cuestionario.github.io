
function logear(){
    let aux1;
    let u=["Andres","andres","Ilesandres6","Emerson","emerson","1127070439"];
    let p=["1127071568","1127071568","Nuncasapo12","1127070439","1127070439","1127070439"];

   
   
    let user=document.getElementById("usuario").value
    let pass=document.getElementById("contraseña").value;

    console.log(u[1]);
    console.log(p[1]);
    console.log("usuario ",user," contraseña ",pass);
    
let aux2;

    for(let i=0; i<=u.length; i++){
        if(user==u[i] && pass==p[i]){
            aux1=1;
            aux2=i;
            i=u.length;
            window.location = "datos_generales.html";
            /*document.getElementById("usuario2").value=u[aux2];
            console.log(u[aux2])*/
        }else{
            aux1=0;
        }
    }

    if(aux1==0){
        alert("Usuario o contraseña incorrecta");
    }

    



}