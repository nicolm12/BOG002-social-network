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
export const barraDesktop = () => {

    class barraDesktop extends HTMLElement {
        constructor() {
            super();

        }
        connectedCallback() {
            this.innerHTML = `<div class="desktop">
            <div class="barraPrincipal">
            <div class="publicacion" >
            <a href="#/publicar"><img src="./imagenes/galeria-de-imagenes.png" width="60px"></a>
            </div>
            <div class="perfilBoton" >
            <a href="#/perfil"><img src="./imagenes/usuario.png" width="70px"></a>
            </div>
            <div class="amigos">
            <a href="#/amigo"><img src="./imagenes/apoyo.png" width="55px"></a>
            </div>
            <div class="search">
            <a href="#/buscar"><img src="./imagenes/buscar.png" width="55px"></a>
            </div>
            <div class="likes">
            <a href="#/megusta"><img src="./imagenes/cinema.png" width="55px"></a>
            </div>
            </div>
            </div>`;
        }
    } 
    window.customElements.define("barra-principal", barraDesktop) ;
};