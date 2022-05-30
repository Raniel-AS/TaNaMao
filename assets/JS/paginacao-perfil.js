
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error(`Erro ${response.status}`);
            return response.text();
        })
        .then(html => carregaResultado(html))
        .then(userLogado => {
            if (href === './perfil-anunciante.html') {
                let userLogado = JSON.parse(localStorage.getItem('userLogado'));
                const exibirNome = document.querySelector('.exibir-nome');
                const exibirCPF = document.querySelector('.exibir-cpf');
                const exibirEmail = document.querySelector('.exibir-email');
                const exibirEndereco = document.querySelector('.exibir-endereco');
                exibirNome.appendChild(document.createTextNode(userLogado.nome));
                exibirCPF.appendChild(document.createTextNode(userLogado.cpf));
                exibirEmail.appendChild(document.createTextNode(userLogado.email));
                exibirEndereco.appendChild(
                    document.createTextNode(`${userLogado.endereco.rua}, ${userLogado.endereco.numCasa} - 
                    ${userLogado.endereco.bairro}, ${userLogado.endereco.cidade} - ${userLogado.endereco.estado}`)
                );
            }
            if (href === './meus-anuncios.html') {
               const meusAnuncios = document.querySelector('.meus-anuncios');
               const meuAnuncio = document.querySelectorAll('.meu-anuncio');
                console.log(meuAnuncio.length);
               if(meuAnuncio.length === 0){
                   const textAnuncio = "Não existe nenhum anúncio nesse Perfil!";
                   
                   meusAnuncios.appendChild(document.createTextNode(textAnuncio));
               }

            }
        })
        .catch(e => console.log(e));


}


function carregaResultado(response) {
    const resultado = document.querySelector('.corpo-conteudo');
    resultado.innerHTML = response;
}

