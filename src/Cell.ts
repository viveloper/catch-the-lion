import Piece from './Piece';

export interface Position {
  row: number;
  col: number;
}

class Cell {
  private isActive = false;
  readonly _el: HTMLElement = document.createElement('div');

  constructor(public readonly position: Position, private piece: Piece) {
    this._el.className = 'cell';
  }

  put(piece: Piece) {
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
    } else {
      this._el.classList.remove('active');
    }

    this._el.innerHTML = this.piece ? this.piece.render() : '';
  }
}

export default Cell;
