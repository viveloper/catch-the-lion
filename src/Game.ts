import Board from './Board';
import DeadZone from './DeadZone';
import Player, { PlayerType } from './Player';

class Game {
  readonly board = new Board();
  readonly upperDeadZone = new DeadZone('upper');
  readonly lowerDeadZone = new DeadZone('lower');

  readonly upperPlayer = new Player(PlayerType.UPPER);
  readonly lowerPlayer = new Player(PlayerType.LOWER);

  constructor() {
    const boardContainer = document.querySelector('.board-container');
    boardContainer.appendChild(this.board._el);
  }
}

export default Game;
