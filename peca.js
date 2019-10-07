class Peca{
    constructor(tipo,posI,posJ,id){
        this._tipo = tipo;
        this._posI = posI;
        this._posJ = posJ;
        this._id = id;
    }

    get posI(){
        return this._posI;
    }
    get posJ(){
        return this._posJ;
    }
    get tipo(){
        return this._tipo;
    }
    get id(){
        return this._id;
    }

    set posI(posI){
         this._posI = posI;
    }
    set posJ(posJ){
         this._posJ =posJ;
    }
    set tipo(tipo){
         this._tipo = tipo;
    }
    set id(id){
        this._id =id;
    }

    mover(tabuleiro,i,j){ //i e j é a nova coordernada da peça
        tabuleiro[this._posI][this.posJ] = 0; //zera posição atual
        tabuleiro[i][j] = this._id; //atualiza posição da peça no tabuleiro
        this._posI = i; //atualiza posição I da peça
        this._posJ = j; //atualiza posição J da peça
        return tabuleiro;
    }

    remover(){
        this._posI = -1;
        this._posJ = -1;
    }


}