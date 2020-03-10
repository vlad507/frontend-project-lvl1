import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

export default () => {
  const operands = ['+', '-', '*'];
  const questions = [];
  const correctAnswers = [];
  const rulesOfGame = 'What is the result of the expression?';
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    const mathSign = operands[getRandomInt(2)];
    questions[count] = `${firstNumber} ${mathSign} ${secondNumber}`;
    if (mathSign === '+') {
      correctAnswers[count] = String(firstNumber + secondNumber);
    } else if (mathSign === '-') {
      correctAnswers[count] = String(firstNumber - secondNumber);
    } else {
      correctAnswers[count] = String(firstNumber * secondNumber);
    }
  }
  playGame(rulesOfGame, questions, correctAnswers);
  return 0;
};
