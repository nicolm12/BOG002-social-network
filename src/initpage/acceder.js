import { inicioFirebase, observador } from '../firebase/firebase.js'
export function ingreso() {
    const form = document.querySelector(".formularioInicio");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const mail = document.getElementById("usser").value;
        console.log(mail)
        const contraseña = document.getElementById("password").value;
        console.log(contraseña)
        inicioFirebase(mail, contraseña)

    });
}

observador();
console.log("estoy probando esta rama,ojala no se me haya desorganizado la modularizacion")