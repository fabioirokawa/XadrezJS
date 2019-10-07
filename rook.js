class Rook extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo,posI,posJ,id);
    }

    //torre anda vertical ou horizontal
    //mantem i ou j, e varia outro

    mover(tabuleiro,i,j){
        for (var x = 0; x <= 7; x++){
            if (((i == this._posI + x || i == this._posI - x) && (j == this._posJ)) || ((j == this._posJ + x || j == this._posJ - x) && (i == this._posI))){
                var a = this._posI - i; //diferença
                var b = this._posJ - j;
                //
                if (a == 0 && b >= 1){ //direita para esquerda
                    var aux = this.posJ-1;
                    while (aux != j){
                        if (tabuleiro[i][aux] != 0) return false;
                        aux--; 
                    }
                    return true;
                }
                else if (a == 0 && b <= -1){ //esquerda para direita
                    var aux = this.posJ+1;
                    while (aux != j){
                        if (tabuleiro[i][aux] != 0) return false;
                        aux++; 
                    }
                    return true;
                }
                else if (a <= -1 && b == 0){ //cima para baixo
                    var aux = this.posI+1;
                    while (aux != i){
                        if (tabuleiro[aux][j] != 0) return false;
                        aux++; 
                    }
                    return true;
                }
                else if (a >= 1 && b == 0){ //baixo para cima
                    var aux = this.posI-1;
                    while (aux != i){
                        if (tabuleiro[aux][j] != 0) return false;
                        aux--; 
                    }
                    return true;
                }
            }
        }
        return false;
    }
}
