

import { router} from './router/enrutador.js';
import { homeDesktop, barraDesktop } from './HTMLscreens/desktop.js';



export const init = () => {

   window.addEventListener('hashchange', () => {
     router(window.location.hash);
      });
}

init(); 

homeDesktop();
barraDesktop ();

//Coleccion de usuarios
//firestore();

