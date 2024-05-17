const url = "https://botafogo-atletas.mange.li";
let lista_jogadoras;

const container = document.createElement('container');
container.style.display = 'flex';
container.style.gap = '.5em';
container.style.justifyContent = 'center';
container.style.flexWrap = 'wrap';

const divPesquisa = document.createElement('div');
divPesquisa.style.textAlign = 'center';
const inputPesquisa = document.createElement('input');
inputPesquisa.type = 'text';
divPesquisa.appendChild(inputPesquisa);

document.body.appendChild(divPesquisa);
document.body.appendChild(container);

const handleClick = (e) => {
    const card = e.target.closest('article');
    const dados = card.dataset;

    for (const p in dados){
        document.cookie = `${p}=${dados[p]}`;
    }
    window.location.href = 'outra.html';
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

    divCard.dataset.id = atleta.id;
    divCard.dataset.descricao = atleta.descricao;
    divCard.dataset.nome = atleta.nome;
    divCard.dataset.nomeCompleto = atleta.nome_completo;
    divCard.dataset.imagem = atleta.imagem;
    divCard.dataset.posicao = atleta.posicao;
    divCard.dataset.elenco = atleta.elenco;
    divCard.dataset.nascimento = atleta.nascimento;
    divCard.dataset.altura = atleta.altura;

    divCard.onclick = handleClick;


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
    pDescri.style.overflow = 'hidden';
    pDescri.style.textOverflow = 'ellipsis';
    pDescri.style.whiteSpace = 'nowrap';

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

    container.appendChild(divCard);
}


/*feminino.forEach(
    (jogadora) => {
        constroiCard(jogadora)
    }
)*/

inputPesquisa.onchange = (e) => {
    const valor = e.target.value;
    const resultado = lista_jogadoras.filter(
        (elemento) => elemento.nome.toLowerCase().includes(valor.toLowerCase())
    )

    container.innerHTML = '';

    resultado.forEach(
        (jogadora) => {
            constroiCard(jogadora)
        }
    )
}

container.innerHTML = `
        <div style="align-text: center">
            <img src='carregando.gif'>
            <p>Carregando...</p>
        <div>
`;

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_json(url).then( (r) => console.log(r) );


pega_json(`${url}/all`).then(
    (lista) => {
        container.innerHTML = '';
        lista_jogadoras = lista;
        lista.forEach(
            (jogadora) => {
                constroiCard(jogadora)
            }
        )
    }
)

console.log('síncrono');