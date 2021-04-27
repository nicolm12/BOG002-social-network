// aqui exportaras las funciones que necesites

import { formularioRegistro, formularioInicio } from './vistas.js';
import { registro } from './registrar.js';

const idRegistro = document.querySelector('#registro');
<<<<<<< HEAD
const idInicio = document.querySelector('#inicio');
const logo = document.getElementById("seccionInicio");

export const router = (route,componenteHtml,componenteInicio) => {
=======
const logo=document.querySelector("#logo");
export const router = (route,componenteHtml,) => {
>>>>>>> 80177e3c158bdbb645b53afcc9a313d9230e72be
  idRegistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      logo.style.display ="none";
     idInicio.innerHTML = `<formulario-inicio></formulario-inicio>`
     formularioInicio();
      break;
<<<<<<< HEAD
    case '#/registro':
    logo.style.display ="none";
=======
    case '#/registro': 
    logo.style.display="none";
    componenteHtml.style.display="none";  
>>>>>>> 80177e3c158bdbb645b53afcc9a313d9230e72be
    idRegistro.innerHTML=`<formulario-registro></formulario-registro>`
    formularioRegistro();
    registro();
    break;
    default:
      return console.log('si funciona pero  esta enlazando la principal');
  }
};