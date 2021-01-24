import Board from './Board';
import DeadZone from './DeadZone';

class Game {
  readonly board = new Board();
  readonly upperDeadZone = new DeadZone('upper');
  readonly lowerDeadZone = new DeadZone('lower');

  constructor() {
    const boardContainer = document.querySelector('.board-container');
    boardContainer.appendChild(this.board._el);
  }
}

export default Game;
