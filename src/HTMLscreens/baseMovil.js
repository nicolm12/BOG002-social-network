export const templateMovil = () => {

    class baseMovil extends HTMLElement {
<<<<<<< HEAD
    constructor() {
        super();

    }
    connectedCallback() {
        this.innerHTML =  ` <section id="baseMovil">
        <div class="container-barra">
          <div class="logo">
              <img src="./imagenes/cine (1).png" width='130vw'>
          </div>
          <div class="button-barra" id="publicar">
            <a href="#publicar"><img src="./imagenes/galeria-de-imagenes.png"></a>
          </div>
          <div class="button-barra" id="perfil">
            <a href="#perfil"><img src="./imagenes/usuario.png"></a>
          </div>
=======
        constructor() {
            super();

        }
        connectedCallback() {
            this.innerHTML = ` <section id="baseMovil">
      <div class="container-barra">
        <div class="logo">
            <img src="./imagenes/cine (1).png" width='160vw'>
>>>>>>> b9f6d94c7243f174d180356d6104313dacfdd5ff
        </div>
        <div class="button-barra" id="publicar">
          <a href="#publicar"><img src="./imagenes/galeria-de-imagenes.png"></a>
        </div>
        <div class="button-barra" id="perfil">
          <a href="#perfil"><img src="./imagenes/usuario.png"></a>
        </div>
      </div>
    <div class="intermido"></div>
      <div class="container-menu">
        <div class="button-menu">
          <a href="#amigo"><img src="./imagenes/apoyo.png"></a>
        </div>
        <div class="button-menu">
          <a href="#buscar"><img src="./imagenes/buscar.png"></a>
        </div>
        <div class="button-menu">
          <a href="#megusta"><img src="./imagenes/cinema.png"></a>
        </div>
      </div>
    </div>
    </section>`;


        }
    }
    if (window.customElements.get("base-movil") === undefined) {
        window.customElements.define("base-movil", baseMovil);
    } else {
        window.customElements.get("base-movil");
    };

};
