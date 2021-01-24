import Cell from './Cell';
import Piece from './Piece';

class Board {
  cells: Cell[] = [];
  _el: HTMLElement = document.createElement('div');

  constructor() {
    this._el.className = 'board';
    for (let row = 0; row < 4; row++) {
      const rowEl = document.createElement('div');
      rowEl.className = 'row';
      this._el.appendChild(rowEl);

      for (let col = 0; col < 3; col++) {
        const cell = new Cell({ row, col }, null);
        this.cells.push(cell);
        rowEl.appendChild(cell._el);
      }
    }
  }

  render() {
    this.cells.forEach((cell) => cell.render());
  }
}

export class DeadZone {
  private cells: Cell[] = [];
  readonly deadZoneEl: HTMLElement = document
    .getElementById(`${this.type}_deadzone`)
    .querySelector('.card-body');

  constructor(public type: 'upper' | 'lower') {
    for (let col = 0; col < 4; col++) {
      const cell = new Cell({ row: 0, col }, null);
      this.cells.push(cell);
      this.deadZoneEl.appendChild(cell._el);
    }
  }

  put(piece: Piece) {
    const emptyCell = this.cells.find((cell) => cell.getPiece() === null);
    emptyCell.put(piece);
    emptyCell.render();
  }

  render() {
    this.cells.forEach((cell) => cell.render());
  }
}

export default Board;
