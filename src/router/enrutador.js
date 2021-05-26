// aqui exportaras las funciones que necesites

import { formularioRegistro, formularioInicio } from '../HTMLscreens/formularios.js';
import { registro, google } from '../initpage/registrar.js';
import { ingreso } from '../initpage/acceder.js';
import { templateMovil } from '../HTMLscreens/baseMovil.js';
import { Subirimagen } from '../HTMLscreens/post.js';
import { imagen } from '../firebase/postfirebase.js';

const idRegistro = document.querySelector('#registro');
const logo = document.querySelector("#logo");
const idInicio = document.querySelector('#inicio');
const basePrimera = document.querySelector('#basePrimera');
const forminicio = document.querySelector('#inicio');
const contenedorPost = document.querySelector('#formPost');
const home = document.querySelector('#home');
const sectionRegistro = document.querySelector('.registrarse');

export const router = (route) => {

  idRegistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      idInicio.style.display = 'block';
      logo.style.display = 'none';
      home.style.display = 'none';
      idInicio.innerHTML = '<formulario-inicio></formulario-inicio>';
      formularioInicio();
      ingreso();
      
      break;
    case '#/registro':
      sectionRegistro.style.display = "block";
      logo.style.display = "none";
      home.style.display = 'none';
      idRegistro.innerHTML = `<formulario-registro></formulario-registro>`
      formularioRegistro();
      registro();
      google();
      break;



    case '#/principal':
      console.log("listo,enlazo");
      forminicio.style.display = "none";
      basePrimera.innerHTML = `<base-movil></base-movil><barra-principal></barra-principal> `;
    
      templateMovil();
      break

    case '#/publicar':
      contenedorPost.innerHTML = `<formulario-imagenes></formulario-imagenes>`;
      Subirimagen();
      imagen();
      break

    default:

      return console.log('si funciona pero  esta enlazando la principal');
  }
};