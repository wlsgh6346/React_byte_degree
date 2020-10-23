export class Cell {
    constructor(position, piece) {
        this.position = position;
        this.piece = piece;
        this.isActive = false;
        this._el = document.createElement('DIV');
        this._el.classList.add('cell');
    }
    put(piece) {
        this.piece = piece;
    }
    getPiece() {
        return this.piece;
    }
    active() {
        this.isActive = true;
    }
    deactive() {
        this.isActive = false;
    }
    render() {
        if (this.isActive) {
            this._el.classList.add('active');
        }
        else {
            this._el.classList.remove('active');
        }
        console.log(this._el);
        this._el.innerHTML = (this.piece) ? this.piece.render() : '';
    }
}
export class Board {
    constructor(upperPlayer, lowerPlayer) {
        this.cells = [];
        this._el = document.createElement('DIV');
        this.map = new WeakMap(); // key를 객체로 준다.
        this._el.className = 'board';
        for (let row = 0; row < 4; row++) {
            const rowEl = document.createElement('div');
            rowEl.className = 'row';
            this._el.appendChild(rowEl);
            for (let col = 0; col < 3; col++) {
                const piece = upperPlayer.getPieces().find(({ currentPosition }) => currentPosition.col === col && currentPosition.row === row) ||
                    lowerPlayer.getPieces().find(({ currentPosition }) => currentPosition.col === col && currentPosition.row === row);
                console.log(piece);
                const cell = new Cell({ row, col }, piece);
                this.map.set(cell._el, cell);
                this.cells.push(cell);
                rowEl.appendChild(cell._el);
            }
        }
    }
    render() {
        this.cells.forEach(v => v.render());
    }
}
export class DeadZone {
    constructor(type) {
        this.type = type;
        this.cells = [];
        this.deadZoneEl = document.getElementById(`${this.type}_deadzone`).querySelector('.card-body');
        for (let col = 0; col < 4; col++) {
            const cell = new Cell({ col, row: 0 }, null);
            this.cells.push(cell);
            this.deadZoneEl.appendChild(cell._el);
        }
    }
    put(piece) {
        const emptyCell = this.cells.find(v => v.getPiece() == null);
        emptyCell.put(piece);
        emptyCell.render();
    }
    render() {
        this.cells.forEach(v => v.render());
    }
}
