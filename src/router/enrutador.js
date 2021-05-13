// aqui exportaras las funciones que necesites

import { formularioRegistro,formularioInicio } from '../HTMLscreens/formularios.js';
import { registro,google,guardar} from '../initpage/registrar.js';
import { ingreso } from '../initpage/acceder.js';
import{templateMovil} from '../HTMLscreens/baseMovil.js';
import { Subirimagen } from '../HTMLscreens/post.js';
import { imagen } from '../initpage/postfirebase.js';

const idRegistro = document.querySelector('#registro');
const logo=document.querySelector("#logo");
const idInicio = document.querySelector('#inicio');
const basePrimera= document.querySelector('#basePrimera');
const formPost= document.querySelector('#formPost');
const forminicio=document.querySelector('#inicio');
const barras=document.querySelector('#baseMovil');
const home= document.querySelector('#home');
const sectionRegistro = document.querySelector ('.registrarse');
export const router = (route,componenteHtml) => {

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
      sectionRegistro.style.display="block";
      logo.style.display="none";
      home.style.display = 'none';
    idRegistro.innerHTML=`<formulario-registro></formulario-registro>`
    formularioRegistro();
    registro();
    google();
    guardar();
    
    break;
    
    default:
      
      return console.log('si funciona pero  esta enlazando la principal');

      case '#/principal':
        // console.log("listo,enlazo");
        console.log(forminicio)
        console.log("listo,enlazo");
      console.log(forminicio)
      forminicio.style.display = "none";
      basePrimera.innerHTML = `<base-movil></base-movil>`;
    
      templateMovil();
        
      case '#/publicar':
        //barras.style.display="none";
        formPost.innerHTML=`<formulario-imagenes></formulario-imagenes>`;
        Subirimagen();
        imagen();
        break
  }
};