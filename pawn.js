class Pawn extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo,posI,posJ,id);
    }

    mover(tabuleiro,i,j){
        if (this.tipo == 'w'){ 
            if ((i == this._posI - 1 || i == this._posI - 2) && j == this._posJ && tabuleiro[i][j] == 0){ //anda pra frente 1 ou 2 casas desde que esteja vazia
                if (this._posI == 6) return true;
                else if (this._posI != 6 && i == this._posI - 1) return true;   
            } 
            else if (i == this._posI - 1 && (j == this._posJ + 1 || j == this._posJ - 1) && tabuleiro[i][j] != (0&&1&&2&&3&&4&&5&&6)) return true; //só ataca nas diagonais apenas se houver um inimigo
        return false;
        }

        else if (this.tipo == 'b'){
            if ((i == this._posI + 1 || i == this._posI + 2) && j == this._posJ && tabuleiro[i][j] == 0){
                if (this._posI == 1) return true;
                else if (this._posI != 1 && i == this._posI + 1) return true;
            }
            else if (i == this._posI + 1 && (j == this._posJ - 1 || j == this._posJ + 1) && tabuleiro[i][j] != (0&&7&&8&&9&&10&&11&&12)) return true;
        }
        return false;
    }
}