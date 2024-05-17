const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");

    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave)
    );

    return procurado?.split("=")[1];
}

const constroiCard = ( atleta ) => {
    const divCard = document.createElement('article');
    //divCard.className = 'card';
    divCard.style.display = 'grid';
    divCard.style.width = 'fit-content';
    divCard.style.padding = '.5rem';
    divCard.style.border = '2px solid black';
    //divCard.style.borderRadius = '5%';
    divCard.style.gridTemplateColumns = "10rem 20rem";
    divCard.style.gridTemplateAreas = "'a1 a2' 'a3 a3' 'a4 a4'";

   
    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;
    imagem.alt = atleta.nome;
    imagem.style = `
        grid-area: a1;
        height: 8rem;
        width: 8rem;
        object-fit: cover;
        object-position: top;
        border-radius: 50%;
    `;

    const titulo = document.createElement('section');
    titulo.className = 'titulo';
    titulo.style.gridArea = 'a2';
    titulo.style.display = 'flex';
    titulo.style.flexDirection = 'column';
    titulo.style.alignItems = 'center';
    titulo.style.justifyContent = 'center';
    titulo.style.fontWeight = 'bold'
    titulo.style.fontFamily = 'sans-serif';
    titulo.style.textTransform = 'uppercase';

    const pPosicao = document.createElement('p');
    pPosicao.innerHTML = `Posição: ${atleta.posicao}`;
    

    const pNome = document.createElement('p');
    pNome.innerHTML = atleta.nome;
    pNome.style.fontSize = '1.3rem';
    

    const pDescri = document.createElement('p');
    pDescri.className = 'descri'
    pDescri.innerHTML = atleta.descricao;
    pDescri.style.gridArea = 'a3';
    /*pDescri.style.overflow = 'hidden';
    pDescri.style.textOverflow = 'ellipsis';
    pDescri.style.whiteSpace = 'nowrap';*/

    const pNasci = document.createElement('p');
    pNasci.className = 'nasci'
    pNasci.innerHTML = atleta.nascimento;
    pNasci.style.gridArea = 'a4';

    divCard.appendChild(imagem);
    
    divCard.appendChild(titulo);
    titulo.appendChild(pPosicao);
    titulo.appendChild(pNome);

    divCard.appendChild(pDescri);
    divCard.appendChild(pNasci);

    document.body.appendChild(divCard);
}

//montar um objeto

const obj = {};
obj.nome = acha_cookie('nome');
obj.posicao = acha_cookie('posicao');
obj.imagem = acha_cookie('imagem');
obj.descricao = acha_cookie('descricao');
obj.nascimento = acha_cookie('nascimento');

constroiCard(obj);
