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