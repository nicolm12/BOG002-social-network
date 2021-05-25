

import { router} from './router/enrutador.js';
import { homeDesktop } from './HTMLscreens/desktop.js';


export const init = () => {

   window.addEventListener('hashchange', () => {
     router(window.location.hash);
      });
}
init();


homeDesktop();


//Coleccion de usuarios
//firestore();

