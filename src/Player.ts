import Piece from './Piece';

export enum PlayerType {
  UPPER,
  LOWER,
}

class Player {
  private pieces: Piece[];

  constructor(public readonly type: PlayerType) {}
}

export default Player;
