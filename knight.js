class Knight extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo,posI,posJ,id);
    }

    //cavaleiro anda em L
    //pode andar 2 casas vertical ou horizontal e mais 1 perpendicular ao sentido andado

    //
    //         0,1---+---0,3
    //  1,0          |          1,4
    //   |           |           |
    //   +----------2,2----------+
    //   |           |           |
    //  3,0          |          3,4
    //         4,1---+---4,3
    //

    mover(tabuleiro,i,j){
        if ((i == this._posI - 2 || i == this._posI + 2) && (j == this._posJ - 1 || j == this._posJ + 1)) return true
        else if ((i == this._posI - 1 || i == this._posI + 1) && (j == this._posJ - 2 || j == this._posJ + 2)) return true
        return false;
    }
}