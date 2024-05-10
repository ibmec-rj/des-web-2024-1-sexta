const container = document.getElementById('container');


const constroiCard = ( atleta ) => {
    const divCard = document.createElement('div');
    //divCard.className = 'card';
    divCard.style.display = 'grid';
    divCard.style.width = 'fit-content';
    divCard.style.padding = '.5rem';
    divCard.style.border = '1px solid black';
    divCard.style.borderRadius = '5%';
    divCard.style.gridTemplateColumns = "10rem 20rem";
    divCard.style.gridTemplateAreas = "'a1 a2' 'a3 a3' 'a4 a4'";


    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;
    imagem.alt = atleta.nome;

    const titulo = document.createElement('div');
    titulo.className = 'titulo';

    const pPosicao = document.createElement('p');
    pPosicao.innerHTML = atleta.posicao;

    const pNome = document.createElement('p');
    pNome.innerHTML = atleta.nome;

    const pDescri = document.createElement('p');
    pDescri.className = 'descri'
    pDescri.innerHTML = atleta.descricao;

    const pNasci = document.createElement('p');
    pNasci.className = 'nasci'
    pNasci.innerHTML = atleta.nascimento;

    divCard.appendChild(imagem);
    
    divCard.appendChild(titulo);
    titulo.appendChild(pPosicao);
    titulo.appendChild(pNome);

    divCard.appendChild(pDescri);
    divCard.appendChild(pNasci);

    container.appendChild(divCard);
}


feminino.forEach(
    (jogadora) => {
        constroiCard(jogadora)
    }
)


