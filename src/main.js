/* eslint-disable import/named */
// Este es el punto de entrada de tu aplicacion
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs


import { router} from './lib/enrutador.js';

const init = () => {
    //pintar la vista en la que estoy
    window.addEventListener('hashchange', () => {
      
      var componenteInicio = document.querySelector(".opcionesInicio");
      var componenteRegistro = document.querySelector(".opcionesRegistro");
        router(window.location.hash,componenteRegistro,componenteInicio);
      });
};
init();