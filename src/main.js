

<<<<<<< HEAD
import { router} from './router/enrutador.js';
import { homeDesktop } from './HTMLscreens/desktop.js';
import {firestore} from './firebase/firebase.js'

export const init = () => {

=======
import { router} from './lib/enrutador.js';

const init = () => {
   
>>>>>>> origin/nicolm12-main
    window.addEventListener('hashchange', () => {
      var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });
}
init();
<<<<<<< HEAD
homeDesktop();


//Coleccion de usuarios
firestore();
=======








>>>>>>> origin/nicolm12-main
