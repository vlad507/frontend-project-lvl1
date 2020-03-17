import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

const rulesOfGame = 'What is the result of the expression?';

export default () => {
  const gameData = [];
  const operands = ['+', '-', '*'];
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const round = [];
    const firstNumber = getRandomInt(0, 100);
    const secondNumber = getRandomInt(0, 100);
    const mathSign = operands[getRandomInt(0, 2)];
    round.push(`${firstNumber} ${mathSign} ${secondNumber}`);
    switch (mathSign) {
      case '+':
        round.push(String(firstNumber + secondNumber));
        break;
      case '-':
        round.push(String(firstNumber - secondNumber));
        break;
      case '*':
        round.push(String(firstNumber * secondNumber));
        break;
      default:
        break;
    }
    gameData.push(round);
  }
  playGame(rulesOfGame, gameData);
};
