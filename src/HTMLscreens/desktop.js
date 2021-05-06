export const homeDesktop = () => {

    class homeDesktop extends HTMLElement {
        constructor() {
            super();

        }
        connectedCallback() {
            this.innerHTML = `<div class="desktop">
            <div id="barraHome">
            <div id="logoDesktop">
            <img src="./imagenes/cine (1).png" width="60%">
        </div>
        <div class="opcionesInicio">

            <a href="#/registro"><button >Registro</button></a>

            <a href="#/inicio"><button > Inicio</button></a>
            <button>Skip</button>
            </div>
        </div>
         </div>`;


        }
    }

    window.customElements.define("home-desktop", homeDesktop);

};