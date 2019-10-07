class King extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo,posI,posJ,id);
    }

    mover(tabuleiro,i,j){
        if ((i == this._posI - 1 || i == this._posI + 1 || i == this._posI) && (j == this._posJ - 1 || j == this._posJ + 1 || j == this._posJ)) return true //pode andar uma casa em sua volta
        return false;
    }
}