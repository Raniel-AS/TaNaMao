class EventosCliques {
    constructor() {
        this.evento();
    }

    evento() {
        const btnOverflowEsq = document.querySelector(".overflow-left");
        const btnOverflowDir = document.querySelector(".overflow-right");
        const carouselAnuncios = document.querySelector('.content-filtro');
        const btnFiltro = document.querySelector("#btn-menu-filtro");
        const listaFiltro = document.querySelector('.lista-filtro');
        const anuncioAvaliado = document.querySelectorAll(".anuncio-avaliado");
        let auxClique = 0;
        btnOverflowDir.addEventListener('click', e => {
            auxClique++;
            if (auxClique > anuncioAvaliado.length - 2) {
                auxClique = 0;
            }
            carouselAnuncios.style.transform = `translateX(${-auxClique*31}rem)`;
        });
        btnOverflowEsq.addEventListener('click', e => {
            carouselAnuncios.style.transform = 'translateX(0)';
            auxClique = 0;
        });
        btnFiltro.addEventListener('click', e => {
            listaFiltro.classList.toggle('active');
        })
    }
}

const evCliques = new EventosCliques();