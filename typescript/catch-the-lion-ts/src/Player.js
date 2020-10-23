import { Chick, Elephant, Griff, Lion } from "./Piece";
export var PlayerType;
(function (PlayerType) {
    PlayerType["UPPER"] = "UPPER";
    PlayerType["LOWER"] = "LOWER";
})(PlayerType || (PlayerType = {}));
export class Player {
    constructor(type) {
        this.type = type;
        if (type == PlayerType.UPPER) {
            this.pieces = [
                new Griff(PlayerType.UPPER, { row: 0, col: 0 }),
                new Lion(PlayerType.UPPER, { row: 0, col: 1 }),
                new Elephant(PlayerType.UPPER, { row: 0, col: 2 }),
                new Chick(PlayerType.UPPER, { row: 1, col: 1 })
            ];
        }
        else {
            this.pieces = [
                new Elephant(PlayerType.LOWER, { row: 3, col: 0 }),
                new Lion(PlayerType.LOWER, { row: 3, col: 1 }),
                new Griff(PlayerType.LOWER, { row: 3, col: 2 }),
                new Chick(PlayerType.LOWER, { row: 2, col: 1 })
            ];
        }
    }
    getPieces() {
        return this.pieces;
    }
}
