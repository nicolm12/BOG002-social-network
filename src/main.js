

import { router} from './router/enrutador.js';
import { homeDesktop } from './HTMLscreens/desktop.js';
import {firestore} from './firebase/firebase.js'

export const init = () => {

    window.addEventListener('hashchange', () => {
      var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });
}
init();
homeDesktop();


//Coleccion de usuarios
firestore();
