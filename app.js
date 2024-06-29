let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto){
     let campo = document.querySelector(tag);
     campo.innerHTML = texto
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNatela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'Tentativas':'Tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (chute > numeroSecreto){
            exibirTextoNatela('p', 'O número secreto é menor!');
        } else{
            exibirTextoNatela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
    

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1)
}

function limparCampo(){
    chute = document.querySelector('input').value = '';
}

function reiniciarJogo(){
    console.log ('funcionando')
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
