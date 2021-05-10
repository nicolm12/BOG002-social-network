

import { router} from './router/enrutador.js';
import { homeDesktop } from './HTMLscreens/desktop.js';

export const init = () => {

    window.addEventListener('hashchange', () => {
      var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });
}
init();
homeDesktop();


