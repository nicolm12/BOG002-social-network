/* eslint-disable consistent-return */
// aqui exportaras las funciones que necesites

<<<<<<< HEAD:src/lib/enrutador.js
import { formularioRegistro, formularioInicio } from './vistas.js';
import { registro, google } from './registrar.js';
import { ingreso } from './acceder.js';
=======
import { formularioRegistro,formularioInicio } from '/HTMLscreens/formularios.js';
import { registro,google} from '/initpage/registrar.js';
import { ingreso } from '/initpage/acceder.js';
import{templateMovil} from '/HTMLscreens/baseMovil.js';
>>>>>>> 7afbb1654fa3def0e0a769a6bec19a18cfa74947:src/router/enrutador.js

const idRegistro = document.querySelector('#registro');
const logo = document.querySelector("#logo");
const idInicio = document.querySelector('#inicio');
<<<<<<< HEAD:src/lib/enrutador.js

export const router = (route, componenteHtml, componenteInicio) => {
=======
const basePrimera= document.querySelector('#basePrimera');
const forminicio=document.querySelector('#inicio');
export const router = (route,componenteHtml) => {
  
>>>>>>> 7afbb1654fa3def0e0a769a6bec19a18cfa74947:src/router/enrutador.js
  idRegistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      idInicio.style.display = 'block';
      logo.style.display = 'none';
      componenteHtml.style.display = "none";
      idInicio.innerHTML = '<formulario-inicio></formulario-inicio>';
      formularioInicio();
      ingreso();
      break;
    case '#/registro':
      logo.style.display = "none";
      componenteHtml.style.display = "none";
      idRegistro.innerHTML = `<formulario-registro></formulario-registro>`
      formularioRegistro();
      registro();
      google();
      break;
    case '#/registro':
      logo.style.display="none";
      componenteHtml.style.display="none"; 
    idRegistro.innerHTML=`<formulario-registro></formulario-registro>`
    formularioRegistro();
    registro();
    google();
    break;
    default:
      return console.log('si funciona pero  esta enlazando la principal');

      case '#/principal':
        // console.log("listo,enlazo");
        console.log(forminicio)
        forminicio.style.display="none";
        basePrimera.innerHTML=`<base-movil></base-movil>`
        templateMovil();
        let movilBase=document.getElementById("baseMovil").content;
        let nodoBase=document.importNode(movilBase,true);
        document.getElementById("basePrimera").appendChild(nodoBase);
        break
  }
};
