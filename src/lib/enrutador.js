// aqui exportaras las funciones que necesites

import { formularioRegistro, formularioInicio } from './vistas.js';
import { registro } from './registrar.js';

const idRegistro = document.querySelector('#registro');
const idInicio = document.querySelector('#inicio');
const logo = document.getElementById('seccionInicio');

export const router = (route, componenteHtml, componenteInicio) => {
  idRegistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      idInicio.style.display = 'block';
      logo.style.display = 'none';
      idInicio.innerHTML = '<formulario-inicio></formulario-inicio>';
      formularioInicio();
      break;
    case '#/registro':
      logo.style.display = 'none';
      idRegistro.innerHTML = '<formulario-registro></formulario-registro>';
      formularioRegistro();
      registro();
      break;
    default:
      return console.log('si funciona pero  esta enlazando la principal');
  }
};
