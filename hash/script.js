const alvo = "e8d95a51f3af4a3b134bf6bb680a213a";
const mensagem = document.getElementById('mensagem');


document.getElementById('btn_enviar').onclick = () => {
    const entrada = document.getElementById('senha').value;
    if (hex_md5(entrada) === alvo){
        mensagem.innerHTML = 'Entrou!!!';
        sessionStorage.setItem('logado', '1');
    } else {
        mensagem.innerHTML = 'Senha errada!';
    }
}

document.getElementById('btn_sair').onclick = () => {
    sessionStorage.removeItem('logado');
    mensagem.innerHTML = 'Saiu.';
}