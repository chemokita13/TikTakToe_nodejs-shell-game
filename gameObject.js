export default class tikTakToe {
    //TODO: no poder insertar donde ya hay una ficha
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = [[], [], []];
        /*
        BOARD= 
        [
        [0.0, 0.1, 0.2],
        [1.0, 1.0, 1.2],
        [2.0, 2.1, 2.2]
        ]
        ONE MOVE EXAMPLE = [1,2]
        */
        this.turnOf = Math.random() >= 0.5 ? player1 : player2; // choose one player random to start the game
        this.gameRunning = true; // if game is running
    }
    whoMoves() {
        return this.turnOf;
    }
    newMove(coord) {
        this.board[coord[0]][coord[1]] = this.turnOf;
        if (this._checkWin().win === "any") {
            this.turnOf == this.player1
                ? (this.turnOf = this.player2)
                : (this.turnOf = this.player1);
            return this.board; ///this.whoMoves();
        } else {
            this.winner = this.turnOf;
            this.gameRunning = false;
            return { ...this._checkWin(), board: this.board }; /// dev mode
        }
    }

    _checkWin() {
        //check if any player won before make other move (I dont know how to do by other way)
        if (
            this.board[0][0] === this.board[0][1] &&
            this.board[0][0] === this.board[0][2] &&
            this.board[0][0]
        ) {
            return { win: this.whoMoves };
        }
        if (
            this.board[0][0] === this.board[1][1] &&
            this.board[0][0] === this.board[2][2] &&
            this.board[0][0]
        ) {
            return { win: this.whoMoves };
        }
        if (
            this.board[0][0] === this.board[1][0] &&
            this.board[0][0] === this.board[2][0] &&
            this.board[0][0]
        ) {
            return { win: this.whoMoves };
        }
        if (
            this.board[0][1] === this.board[1][1] &&
            this.board[0][1] === this.board[2][1] &&
            this.board[0][1]
        ) {
            return { win: this.whoMoves };
        }
        if (
            this.board[0][2] === this.board[1][2] &&
            this.board[0][2] === this.board[2][2] &&
            this.board[0][2]
        ) {
            return { win: this.whoMoves };
        }
        if (
            this.board[1][0] === this.board[1][1] &&
            this.board[1][0] === this.board[1][2] &&
            this.board[1][0]
        ) {
            return { win: this.whoMoves };
        }
        if (
            this.board[2][0] === this.board[2][1] &&
            this.board[2][0] === this.board[2][2] &&
            this.board[2][0]
        ) {
            return { win: this.whoMoves };
        }
        if (
            this.board[2][0] === this.board[1][1] &&
            this.board[2][0] === this.board[0][2] &&
            this.board[2][0]
        ) {
            return { win: this.whoMoves };
        }
        /* else */
        return { win: "any" };
    }
}