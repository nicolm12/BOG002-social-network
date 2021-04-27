

import { router} from './lib/enrutador.js';
<<<<<<< HEAD
=======

>>>>>>> 80177e3c158bdbb645b53afcc9a313d9230e72be

const init = () => {
   
    window.addEventListener('hashchange', () => {
      
      var componenteInicio = document.querySelector(".opcionesInicio");
      var componenteRegistro = document.querySelector(".opcionesRegistro");
        router(window.location.hash,componenteRegistro,componenteInicio);
      });
<<<<<<< HEAD
};
init();
=======
}
init();








>>>>>>> 80177e3c158bdbb645b53afcc9a313d9230e72be
