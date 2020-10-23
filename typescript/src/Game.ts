import {Board, DeadZone} from "./Board";
import {PlayerType, Player} from "./Player";

export class Game {
    readonly upperDeadZone = new DeadZone('UPPER');
    readonly lowerDeadZone = new DeadZone('LOWER');

    readonly upperPlayer = new Player(PlayerType.UPPER);
    readonly lowerPlayer = new Player(PlayerType.LOWER);
    readonly board = new Board(this.upperPlayer, this.lowerPlayer);

    constructor() {
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);

        this.board.render();
    }

}