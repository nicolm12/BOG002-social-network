import {registroFirebaseEmail,googleFirebase} from '../firebase/firebase.js'

export function registro(){
 let form= document.querySelector('#formularioRegistro');


form.addEventListener('submit', (e)=>{
    e.preventDefault() ;
    var email=document.getElementById("email").value;
    var password=document.getElementById("psw").value;
    registroFirebaseEmail(email,password);

    
})
}
export function google() {
  let googleInicio = document.querySelector('#google');
  googleInicio.addEventListener('click', () => {
     googleFirebase();

   });
}

export function guardar() { 
  let nombre = document.querySelector("#Usuario").value;
  let correo = document.querySelector("#email").value;
  let fecha = document.querySelector("#start").value;
  db.collection("usuarios").add({
  Nombre: nombre,
  Correo: correo,
  Fecha: fecha
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

let botonGuardar = document.querySelector("#botonRegistrarse");
botonGuardar.addEventListener('click', () => {
  guardar();
});
}