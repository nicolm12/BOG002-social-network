

import { router} from './router/enrutador.js';
import { homeDesktop, barraDesktop } from './HTMLscreens/desktop.js';



export const init = () => {

  return window.addEventListener('hashchange', () => {
    var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });

  
}

init(); 

homeDesktop();
barraDesktop ();

//Coleccion de usuarios
//firestore();

