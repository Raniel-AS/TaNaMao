class ValidaAnuncio {
    constructor() {
        this.formulario = document.querySelector('.formulario-anuncio');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

}