class Queen extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo,posI,posJ,id);
    }

    ///foda

    mover(tabuleiro,i,j){
            for (var x = 0; x <= 7; x++){ //mesma verificação do bispo
                if ((i == this._posI - x && j == this._posJ - x) || (i == this._posI + x && j == this._posJ + x) || (i + j == this._posI + this._posJ)){
                    var a = this._posI - i; //tamanho a ser verificado se há peças ou não no caminho
                    var b = this._posJ - j; //idem
                    var c = this._posI - this._posJ;
    
                    //noroeste
                    if (i < this._posI && j < this._posJ){
                        var aux = this._posI - 1;
                        var aux2 = this._posJ - 1;
                        while (aux != i){
                            if (tabuleiro[aux][aux2] != 0) return false;
                            aux--;
                            aux2--; 
                        }
                        return true;
                    }
    
                    //sudeste
                    else if (i > this._posI && j > this._posJ){
                        var aux = this._posI + 1;
                        var aux2 = this._posJ + 1;
                        while (aux != i){
                            if (tabuleiro[aux][aux2] != 0) return false;
                            aux++;
                            aux2++; 
                        }
                        return true;
                    }
    
                    //nordeste
                    else if (i < this._posI && j > this._posJ){
                        var aux = this._posI - 1;
                        var aux2 = this._posJ + 1;
                        while (aux != i){
                            if (tabuleiro[aux][aux2] != 0) return false;
                            aux--;
                            aux2++; 
                        }
                        return true;
                    }
    
                    //sudoeste
                    else if (i > this._posI && j < this._posJ){
                        var aux = this._posI + 1;
                        var aux2 = this._posJ - 1;
                        while (aux != i){
                            if (tabuleiro[aux][aux2] != 0) return false;
                            aux++;
                            aux2--; 
                        }
                        return true;
                    }
                }

                ////mesma verificação da torre
                else if (((i == this._posI + x || i == this._posI - x) && (j == this._posJ)) || ((j == this._posJ + x || j == this._posJ - x) && (i == this._posI))){
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