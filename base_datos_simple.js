
let resp=new Array(5);
for(let i=0; i<5; i++){
    resp[i]=new Array;
}

let aux12;

function guardar(){
    let p1=document.getElementById("nombre").value;
    let p2=document.getElementById("semestre").value;
    resp.push(p1,p2);
    

    console.log(resp);

    aux12++;

}

function mostrar(){
    let p11=document.getElementById("p1").textContent;;
    document.getElementById("quest").innerHTML = p11;
    console.log(p11);
}