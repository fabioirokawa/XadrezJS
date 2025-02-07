function JogoXadrezNew() {
	// Identificador de cada peça!
	const W_KING   = 1;  // "&#9812" ♔
	const W_QUEEN  = 2;  // "&#9813" ♕
	const W_ROOK   = 3;  // "&#9814" ♖
	const W_BISHOP = 4;  // "&#9815" ♗
	const W_KNIGHT = 5;  // "&#9816" ♘
	const W_PAWN   = 6;  // "&#9817" ♙
	const B_KING   = 7;  // "&#9818" ♚
	const B_QUEEN  = 8;  // "&#9819" ♛
	const B_ROOK   = 9;  // "&#9820" ♜
	const B_BISHOP = 10; // "&#9821" ♝
	const B_KNIGHT = 11; // "&#9822" ♞
	const B_PAWN   = 12; // "&#9823" ♟

	let color = 'w';

    var tabJogo = new Tabuleiro();

	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	this.getTabuleiro = function() {
		return tabJogo.getRepresentacao();
	}

	// Esse método reinicia o jogo.
	this.reiniciar = function() {
		tabJogo.reinicia();
		color = 'w';
	}

	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	// Se a posição não tiver uma peça pertencente ao jogador atual, esse método deve retornar null;
	this.getPeca = function(i, j) {
		let player = tabJogo.getPeca(i,j);
		if (player.tipo != color) return null;
		if (color == 'w') color = 'b';
		else color = 'w';
		return player;
	}

	// Pega qualquer peça independente se é branca ou preta
	this.getPecaAll = function(i,j){
		return tabJogo.getPeca(i,j);
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	// Se o movimento não for possível, esse método deve retornar false. Caso contrário, deve retornar true;
	// Não é necessário se preocupar com a existência de outra peça. Caso a posição final da peça esteja ocupada por outra, a peça deverá ser substituída pela nova.
	// Sempre que esse método for executado com sucesso (retornando true) o turno deve ser atualizado, passando o controle para o outro jogador. Obs: não é permitido que o usuário mova uma peça de outro jogador.
	this.moverPeca = function(peca, i, j) {

		// Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (peca.posI == i && peca.posJ == j)
			return false;

		if (peca.mover(tabJogo.getRepresentacao(),i,j)){ //se for true faz o movimento da peça
			tabJogo.rmPeca(peca.posI,peca.posJ);
			tabJogo.rmPeca(i,j);
			tabJogo.addPeca(peca, i ,j);
			return true;
		}

		return false;
	}
}
