import Cell from './Cell';
import Piece from './Piece';

class DeadZone {
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

export default DeadZone;
