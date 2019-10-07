var jogo = new JogoXadrezNew();

function init() {
	gerar_tabuleiro();
	atualizar_jogo();
}

function select(i,j) {

	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j]
	if (select.obj_clicado === undefined || select.obj_clicado === null) { //se não houver peça selecionada
		var peca = jogo.getPeca(i, j); //retorna peça na posição i,j
		
		if (peca == null)
			return;

		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = peca;
		obj.style.backgroundColor = "green";
		return;
	}
	//se houver peça selecionada entra aqui
	select.ally = jogo.getPecaAll(i, j); //pega peça na posição i,j. A peça a ser colocada ja está selecionada.
	if ((select.ally == null) || (select.ally.tipo != select.peca.tipo)){ //se não houver peça no espaço i,j faz o movimento
		if (jogo.moverPeca(select.peca, i, j)) { //funcao
			select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
			select.obj_clicado = null;
			atualizar_jogo();

			if (select.ally.id == 1){
				alert("Black Wins");
				//atualizar_jogo();
				reiniciar_jogo_fim();
				
			} 
			else if (select.ally.id == 7){
				alert("White Wins");
				//atualizar_jogo();
				reiniciar_jogo_fim();
				
			} 
			
		} else {
			alert("Movimento invalido!");
		}
		
	}
	else if (select.ally.tipo == select.peca.tipo){ //se o tipo de peça já selecionada quanto o tipo de peça na posição i,j forem os mesmos, troca a selecionada pelo novo
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;

		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = select.ally;
		obj.style.backgroundColor = "green";
		atualizar_jogo();
	}


}

function atualizar_jogo() {
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.getTabuleiro(); //funcao

	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) {
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) {
			obj = tabuleiro.rows[i].cells[j]
				obj.innerHTML = pecas[tabData[i][j]];
		}
	}

}

function reiniciar_jogo() {
	select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
	select.obj_clicado = null;
	atualizar_jogo();
	jogo.reiniciar();
	atualizar_jogo();
}

function reiniciar_jogo_fim() {

	jogo.reiniciar();
	atualizar_jogo();
}

function gerar_tabuleiro() {
	var table = "<table id=\"tabuleiro\">";
	var color = false;

	for (var i = 0; i < 8; i++) {
		table += "<tr>";
		for (var j = 0; j < 8; j++) {
			if (color) {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"silver\" onclick=\"select(" + i + "," + j + ");\"></td>";
			} else {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"white\" onclick=\"select(" + i + "," + j + ");\"></td>";
			}

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(table);
}

init();
