class Bishop extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo,posI,posJ,id);
    }
    
    //bispo anda na diagonal
    //se for diagonal para esquerda, é true se posição atual for igual a (i-x e j-x) ou (i+x e j+x)
    //se for diagonal para direita, é true se i+j = posiçãoAtualI + posiçãoAtualJ

    //
    //2,0       2,4
    //  3,1   3,3
    //     4,2
    //  5,1   5,3
    //6,0       6,4
    //

    mover(tabuleiro,i,j){
        for (var x = 0; x <= 7; x++){
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
        }
        return false;
    }
}
