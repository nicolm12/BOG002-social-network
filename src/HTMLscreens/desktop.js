export const homeDesktop = () => {

    class homeDesktop extends HTMLElement {
        constructor() {
            super();

        }
        connectedCallback() {
            this.innerHTML = `
    <div class="desktop">
        <div class="barraHome">
            <div id="logoDesktop">
              <img src="./imagenes/cine (1).png" width="150vw">
            </div>
            <div class="opcionesRegistro">
            <a href="#/registro"><button >Registro</button></a>
            </div> 
            <div class="opcionesInicio">
              <a href="#/inicio" "><button > Inicio</button></a>
            </div>    
        </div>
    </div>`;


        }
    }

    window.customElements.define("home-desktop", homeDesktop);

};