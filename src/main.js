

import { router} from './router/enrutador.js';


export const init = () => {
   
    window.addEventListener('hashchange', () => {
      
      var componenteInicio = document.querySelector(".opcionesInicio");
      var componenteRegistro = document.querySelector(".opcionesRegistro");
        router(window.location.hash,componenteRegistro,componenteInicio);
      });
}
init();