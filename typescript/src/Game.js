import { Board, DeadZone } from "./Board";
import { PlayerType, Player } from "./Player";
export class Game {
    constructor() {
        this.upperDeadZone = new DeadZone('UPPER');
        this.lowerDeadZone = new DeadZone('LOWER');
        this.upperPlayer = new Player(PlayerType.UPPER);
        this.lowerPlayer = new Player(PlayerType.LOWER);
        this.board = new Board(this.upperPlayer, this.lowerPlayer);
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);
        this.board.render();
    }
}
