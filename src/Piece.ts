import Cell, { Position } from './Cell';
import { PlayerType } from './Player';

export class MoveResult {
  constructor(private killedPiece: Piece) {}
  getKilled() {
    return this.killedPiece;
  }
}

export default interface Piece {
  ownerType: PlayerType;
  currentPosition: Position;
  move(from: Cell, to: Cell): MoveResult;
  render(): string;
}

abstract class DefaultPiece implements Piece {
  constructor(
    public readonly ownerType: PlayerType,
    public currentPosition: Position
  ) {}

  move(from: Cell, to: Cell): MoveResult {
    if (!this.canMove(to.position)) {
      throw new Error('can no move!');
    }
    const moveResult = new MoveResult(to.getPiece());
    to.put(this);
    from.put(null);
    this.currentPosition = to.position;
    return moveResult;
  }

  abstract canMove(position: Position): boolean;
  abstract render();
}
