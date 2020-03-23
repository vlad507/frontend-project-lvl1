import { playGame, numberOfRounds } from '../index.js';

import getRandomInt from '../utils.js';

const operators = ['+', '-', '*'];

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const task = 'What is the result of the expression?';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRounds; count += 1) {
    const firstNumber = getRandomInt(0, 100);
    const secondNumber = getRandomInt(0, 100);
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const answer = String(calculate(firstNumber, secondNumber, operator));
    const roundData = [question, answer];
    gameData.push(roundData);
  }
  playGame(task, gameData);
};
