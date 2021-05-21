

import { router} from './router/enrutador.js';
import { homeDesktop } from './HTMLscreens/desktop.js';


export const init = () => {

  return window.addEventListener('hashchange', () => {
    var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });

  
}
<<<<<<< HEAD

init();
=======
init();

>>>>>>> 017389889fba0eef3254a1e5c36c9949a9482c93

homeDesktop();

//Coleccion de usuarios
//firestore();

