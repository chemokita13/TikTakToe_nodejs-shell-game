import tikTakToe from "./gameObject.js";
import Prompt from "prompt-sync";
const input = Prompt();

const game = new tikTakToe(input("Player 1: "), input("Player 2: "));

const printer = (game) => {
    const p1InitialsChars = game.player1.substr(0, 2);
    const p2InitialsChars = game.player2.substr(0, 2);
    const checkPlayer1OrPlayer2OrEMpty = (coord) => {
        if (game.board[coord[0]][coord[1]] === game.player1) {
            return p1InitialsChars;
        }
        if (game.board[coord[0]][coord[1]] === game.player2) {
            return p2InitialsChars;
        }
        return "  ";
    };
    const returner = `
    #------*------*------#    
    #  ${checkPlayer1OrPlayer2OrEMpty([
        0, 0,
    ])}  |  ${checkPlayer1OrPlayer2OrEMpty([
        0, 1,
    ])}  |  ${checkPlayer1OrPlayer2OrEMpty([0, 2])}  |    
    #------*------*------#    
    #  ${checkPlayer1OrPlayer2OrEMpty([
        1, 0,
    ])}  |  ${checkPlayer1OrPlayer2OrEMpty([
        1, 1,
    ])}  |  ${checkPlayer1OrPlayer2OrEMpty([1, 2])}  |    
    #------*------*------#    
    #  ${checkPlayer1OrPlayer2OrEMpty([
        2, 0,
    ])}  |  ${checkPlayer1OrPlayer2OrEMpty([
        2, 1,
    ])}  |  ${checkPlayer1OrPlayer2OrEMpty([2, 2])}  |    
    #------*------*------#    
`;
    return returner;
};

while (game.gameRunning) {
    console.clear();
    console.log("board: \n", printer(game));
    const move = input(`Turn of ${game.turnOf}: `).split(".");
    game.newMove(move);
}
console.clear();
console.log("\n\nWon", game.winner, "!!! \n\n");
