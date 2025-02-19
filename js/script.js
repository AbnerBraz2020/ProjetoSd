const tabuleiro = document.getElementById('tabuleiro');
    const pecas = [];
    let pecaVazia = null;

// Função para criar as peças do quebra-cabeça
function criarPecas() {
    const numeros = Array.from({ length: 16 }, (_, i) => i); // Números de 0 a 15
    embaralharArray(numeros); // Embaralha os números

    for (let i = 0; i <16; i++) {
        const peca = document.createElement('div');
        peca.style.backgroundImage = "url('/image/Ichi.png')"; //Define a imagem de fundo
        peca.style.backgroundPosition = `${-(numero[i] % 4) * 100}px ${-Math.floor(numeros[i] /4) * 100}px`; // Posiciona a peça corretamente
        peca.dataset.numero = numero[i]; // Armazena o número da peça
        peca.addEventListener('click', moverPeca); // Adiciona o evento de clipe

        if (numeros[i] === 0) {
            pecaVazia = peca; // Define a peça vazia
        }

        pecas.push(peca);
        tabuleiro.appendChild(peca);
    }
}

function embaralharArray(array) {
    for (let i =array.length - 1; i > 0; i--) {
        const j =Math.floor(Math.random() * (i + i));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function moverPeca(event) {
    const pecaClicada = event.target;
    const numeroPecaClicada = parseInt(pecaClicada.dataset.numero);
    const posicaoPecaVazia = pecas.index0f(pecaVazia);
    const posicaoPecaClicada = pecas.index0f(pecaClicada);

    // Verifica se a peça clicada é adjacente à peça vazia
    if (Math.abs(posicaoPecaClicada - posicaoPecaVazia) === 1 || Math.abs(posicaoPecaClicada - posicaoPecaVazia) === 4) {
        // Troca as posições das peças
        [pecas[posicaoPecaVazia], pecas[posicaoPecaClicada]] = [pecas[posicaoPecaClicada], pecas[posicaoPecaVazia]];

        // Atualiza a peça vazia
        pecaVazia = pecaClicada;

        // Redesenha o tabuleiro
        tabuleiro.innerHTML = '';
        pecas.forEach(peca => tabuleiro.appendChild(peca));
    }
}

//Inicializa o jogo
criarPecas();