const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo')

const numeroCapitulos = 10; //const é quando nao vai mudar e let é quando muda usar const aqui pq sempre vai ser 10 capitulos
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {

    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');

}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar(){
    if ( taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}
//----------------------------------------------------------------------------------------------------------//
function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    
}


botaoPlayPause.addEventListener('click', tocarOuPausar); //capacidade de escutar um evento (ei eu quero carne, churrasqueiro diz que carne ta pronto e voce sai correndo. é o evento de CLICK)
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
