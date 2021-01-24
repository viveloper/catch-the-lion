import Cell from './Cell';

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

export default Board;
