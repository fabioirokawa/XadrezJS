function Tabuleiro(){

        this.reinicia = function(){
            tabuleiro = new Array(8);
            for(var i = 0; i < 8; i++) {
                tabuleiro[i] = new Array(8);
                for(j = 0; j < 8; j++)
                    tabuleiro[i][j] = 0; // ID_1 = 0
            }

            //Kings
            kingB = new King('b',0,4,7);
            kingW = new King('w',7,4,1);
    
            //Queens
            queenB = new Queen('b',0,3,8);
            queenW = new Queen('w',7,3,2);
    
            //Rooks (Rookies?)
            rookB1 = new Rook('b',0,0,9);
            rookB2 = new Rook('b',0,7,9);
    
            rookW1 = new Rook('w',7,0,3);
            rookW2 = new Rook('w',7,7,3);
    
            //Bishops
            bishopB1 = new Bishop('b',0,2,10);
            bishopB2 = new Bishop('b',0,5,10);
    
            bishopW1 = new Bishop('w',7,2,4);
            bishopW2 = new Bishop('w',7,5,4);
    
            //Knights
            knightB1 = new Knight('b',0,1,11);
            knightB2 = new Knight('b',0,6,11);
    
            knightW1 = new Knight('w',7,1,5);
            knightW2 = new Knight('w',7,6,5);
            
            //Black Pawns
            pawnB1 = new Pawn('b',1,0,12);
            pawnB2 = new Pawn('b',1,1,12);
            pawnB3 = new Pawn('b',1,2,12);
            pawnB4 = new Pawn('b',1,3,12);
            pawnB5 = new Pawn('b',1,4,12);
            pawnB6 = new Pawn('b',1,5,12);
            pawnB7 = new Pawn('b',1,6,12);
            pawnB8 = new Pawn('b',1,7,12);
    
            //White Pawns
            pawnW1 = new Pawn('w',6,0,6);
            pawnW2 = new Pawn('w',6,1,6);
            pawnW3 = new Pawn('w',6,2,6);
            pawnW4 = new Pawn('w',6,3,6);
            pawnW5 = new Pawn('w',6,4,6);
            pawnW6 = new Pawn('w',6,5,6);
            pawnW7 = new Pawn('w',6,6,6);
            pawnW8 = new Pawn('w',6,7,6);
    
            //tabuleiro[7][7] = 6;
            tabuleiro[kingW.posI][kingW.posJ] = kingW.id;
            tabuleiro[kingB.posI][kingB.posJ] = kingB.id;
    
            tabuleiro[queenW.posI][queenW.posJ] = queenW.id;
            tabuleiro[queenB.posI][queenB.posJ] = queenB.id;
    
            tabuleiro[rookB1.posI][rookB1.posJ] = rookB1.id;
            tabuleiro[rookW1.posI][rookW1.posJ] = rookW1.id;
            tabuleiro[rookB2.posI][rookB2.posJ] = rookB2.id;
            tabuleiro[rookW2.posI][rookW2.posJ] = rookW2.id;
    
            tabuleiro[bishopB1.posI][bishopB1.posJ] = bishopB1.id;
            tabuleiro[bishopW1.posI][bishopW1.posJ] = bishopW1.id;
            tabuleiro[bishopB2.posI][bishopB2.posJ] = bishopB2.id;
            tabuleiro[bishopW2.posI][bishopW2.posJ] = bishopW2.id;
    
            tabuleiro[knightB1.posI][knightB1.posJ] = knightB1.id;
            tabuleiro[knightW1.posI][knightW1.posJ] = knightW1.id;
            tabuleiro[knightB2.posI][knightB2.posJ] = knightB2.id;
            tabuleiro[knightW2.posI][knightW2.posJ] = knightW2.id;
    
            tabuleiro[pawnW1.posI][pawnW1.posJ] = pawnW1.id;
            tabuleiro[pawnW2.posI][pawnW2.posJ] = pawnW2.id;
            tabuleiro[pawnW3.posI][pawnW3.posJ] = pawnW3.id;
            tabuleiro[pawnW4.posI][pawnW4.posJ] = pawnW4.id;
            tabuleiro[pawnW5.posI][pawnW5.posJ] = pawnW5.id;
            tabuleiro[pawnW6.posI][pawnW6.posJ] = pawnW6.id;
            tabuleiro[pawnW7.posI][pawnW7.posJ] = pawnW7.id;
            tabuleiro[pawnW8.posI][pawnW8.posJ] = pawnW8.id;
    
            tabuleiro[pawnB1.posI][pawnB1.posJ] = pawnB1.id;
            tabuleiro[pawnB2.posI][pawnB2.posJ] = pawnB2.id;
            tabuleiro[pawnB3.posI][pawnB3.posJ] = pawnB3.id;
            tabuleiro[pawnB4.posI][pawnB4.posJ] = pawnB4.id;
            tabuleiro[pawnB5.posI][pawnB5.posJ] = pawnB5.id;
            tabuleiro[pawnB6.posI][pawnB6.posJ] = pawnB6.id;
            tabuleiro[pawnB7.posI][pawnB7.posJ] = pawnB7.id;
            tabuleiro[pawnB8.posI][pawnB8.posJ] = pawnB8.id;
        }

        //tab de 0 a 7. Primeira posição [0][0]. Última posição [7][7]

        //I = vertical // J = horizontal

        //(tipo, posI, posJ, id)

        //W_KING   = 1;  // "&#9812" ♔
        //W_QUEEN  = 2;  // "&#9813" ♕
        //W_ROOK   = 3;  // "&#9814" ♖
        //W_BISHOP = 4;  // "&#9815" ♗
        //W_KNIGHT = 5;  // "&#9816" ♘
        //W_PAWN   = 6;  // "&#9817" ♙
        //B_KING   = 7;  // "&#9818" ♚
        //B_QUEEN  = 8;  // "&#9819" ♛
        //B_ROOK   = 9;  // "&#9820" ♜
        //B_BISHOP = 10; // "&#9821" ♝
        //B_KNIGHT = 11; // "&#9822" ♞
        //B_PAWN   = 12; // "&#9823" ♟



    //coloca a peca na posicao i,j
    this.addPeca = function(peca, i, j){
        tabuleiro[i][j] = peca.id;
        peca.posI = i;
        peca.posJ = j;
        return tabuleiro;
    }

    //remove peca e aplica -1 em i e j indicando que está fora do jogo
    this.rmPeca = function(i,j){
        var SILENCE_PIECE = this.getPeca(i,j);
        tabuleiro[i][j] = 0;
        if (SILENCE_PIECE == null) return tabuleiro;
        SILENCE_PIECE.remover();
        return tabuleiro;
    }

    //retorna referencia para o objeto localizado no i,j
    this.getPeca = function(i,j){

        if (i == kingB.posI && j == kingB.posJ)
            return kingB;
        if (i == queenB.posI && j == queenB.posJ)
            return queenB;
        if (i == rookB1.posI && j == rookB1.posJ)
            return rookB1;
        if (i == rookB2.posI && j == rookB2.posJ)
            return rookB2;
        if (i == bishopB1.posI && j == bishopB1.posJ)
            return bishopB1;
        if (i == bishopB2.posI && j == bishopB2.posJ)
            return bishopB2;
        if (i == knightB1.posI && j == knightB1.posJ)
            return knightB1;
        if (i == knightB2.posI && j == knightB2.posJ)
            return knightB2;

        if (i == pawnB1.posI && j == pawnB1.posJ)
            return pawnB1;
        if (i == pawnB2.posI && j == pawnB2.posJ)
            return pawnB2;
        if (i == pawnB3.posI && j == pawnB3.posJ)
            return pawnB3;
        if (i == pawnB4.posI && j == pawnB4.posJ)
            return pawnB4;
        if (i == pawnB5.posI && j == pawnB5.posJ)
            return pawnB5;
        if (i == pawnB6.posI && j == pawnB6.posJ)
            return pawnB6;
        if (i == pawnB7.posI && j == pawnB7.posJ)
            return pawnB7;
        if (i == pawnB8.posI && j == pawnB8.posJ)
            return pawnB8;

        if (i == kingW.posI && j == kingW.posJ)
            return kingW;
        if (i == queenW.posI && j == queenW.posJ)
            return queenW;
        if (i == rookW1.posI && j == rookW1.posJ)
            return rookW1;
        if (i == rookW2.posI && j == rookW2.posJ)
            return rookW2;
        if (i == bishopW1.posI && j == bishopW1.posJ)
            return bishopW1;
        if (i == bishopW2.posI && j == bishopW2.posJ)
            return bishopW2;
        if (i == knightW1.posI && j == knightW1.posJ)
            return knightW1;
        if (i == knightW2.posI && j == knightW2.posJ)
            return knightW2;

        if (i == pawnW1.posI && j == pawnW1.posJ)
            return pawnW1;
        if (i == pawnW2.posI && j == pawnW2.posJ)
            return pawnW2;
        if (i == pawnW3.posI && j == pawnW3.posJ)
            return pawnW3;
        if (i == pawnW4.posI && j == pawnW4.posJ)
            return pawnW4;
        if (i == pawnW5.posI && j == pawnW5.posJ)
            return pawnW5;
        if (i == pawnW6.posI && j == pawnW6.posJ)
            return pawnW6;
        if (i == pawnW7.posI && j == pawnW7.posJ)
            return pawnW7;
        if (i == pawnW8.posI && j == pawnW8.posJ)
            return pawnW8;
            
        return null;
    }

    //mostra tabuleiro
    this.getRepresentacao = function(){
        return tabuleiro;
    }

    this.setTab = function(tab){
        tabuleiro = tab;
    }
    this.getTab = function(){
        return tabuleiro;
    }
 
    this.reinicia();
}