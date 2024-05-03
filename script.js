console.log("Todos os nomes \n ------------------------------------");

feminino.forEach(
    (obj) => {
        console.log(obj.nome_completo);
    }
)

console.log("Todos as alturas \n ------------------------------------");

let count = 0;
while (count < feminino.length) {
    console.log(`Altura de ${feminino[count].nome}`, feminino[count].altura);
    count++;
}

console.log("Posições \n ------------------------------------");

for(let outroCount = 0; outroCount < feminino.length; outroCount++){
    console.log(`Posição de ${feminino[outroCount].nome} ${feminino[outroCount].posicao}`);
}

console.log("Descrições \n ------------------------------------");
for (const about of feminino){
    console.log(`Descrição de ${about.nome} - ${about.descricao}`);
}


const container = document.getElementById('container');


let cards = "";


feminino.forEach(
    (jogadora) => {
        cards += `
        <div class='card'>
            <img src=${jogadora.imagem}>
            <div class='titulo'>
                <p>${jogadora.posicao}</p>
                <p>${jogadora.nome}</p>
            </div>
            <p class='descri'>${jogadora.descricao}</p>
            <p class='nasci'>Nascimento: ${jogadora.nascimento}</p>
        </div>
    `;
    }
)


container.innerHTML = cards;