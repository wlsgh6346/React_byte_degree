import loinImage from './images/lion.png';
import chickenImage from './images/chicken.png';
import griffImage from './images/griff.png';
import elophantImage from './images/elophant.png';
import { PlayerType } from "./Player";
export class MoveResult {
    constructor(killedPiece) {
        this.killedPiece = killedPiece;
    }
    getKilled() {
        return this.killedPiece;
    }
}
class DefaultPiece {
    constructor(ownerType, currentPosition) {
        this.ownerType = ownerType;
        this.currentPosition = currentPosition;
    }
    move(from, to) {
        if (!this.canMove(to.position)) {
            throw new Error('can no move!');
        }
        const moveResult = new MoveResult((to.getPiece() != null) ? to.getPiece() : null);
        to.put(this);
        from.put(null);
        this.currentPosition = to.position;
        return moveResult;
    }
}
export class Lion extends DefaultPiece {
    canMove(pos) {
        const canMove = (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col)
            || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col)
            || (pos.col === this.currentPosition.col + 1 && pos.row === this.currentPosition.row)
            || (pos.col === this.currentPosition.col - 1 && pos.row === this.currentPosition.row)
            || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col + 1)
            || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col - 1)
            || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col + 1)
            || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col - 1);
        return canMove;
    }
    render() {
        return `<img class="piece ${this.ownerType}" src="${loinImage}" alt="saf" width="90%" height="90%"/>`;
    }
}
export class Elephant extends DefaultPiece {
    canMove(pos) {
        return (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col + 1)
            || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col - 1)
            || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col + 1)
            || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col - 1);
    }
    render() {
        return `<img class="piece ${this.ownerType}" src="${elophantImage}" width="90%" height="90%"/>`;
    }
}
export class Griff extends DefaultPiece {
    canMove(pos) {
        return (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col)
            || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col)
            || (pos.col === this.currentPosition.col + 1 && pos.row === this.currentPosition.row)
            || (pos.col === this.currentPosition.col - 1 && pos.row === this.currentPosition.row);
    }
    render() {
        return `<img class="piece ${this.ownerType}" src="${griffImage}" width="90%" height="90%"/>`;
    }
}
export class Chick extends DefaultPiece {
    canMove(pos) {
        return this.currentPosition.row + ((this.ownerType == PlayerType.UPPER) ? +1 : -1) === pos.row;
    }
    render() {
        return `<img class="piece ${this.ownerType}" src="${chickenImage}" width="90%" height="90%"/>`;
    }
}
