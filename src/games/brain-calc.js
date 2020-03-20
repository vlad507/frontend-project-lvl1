import { playGame, numberOfRounds } from '../index.js';

import getRandomInt from '../utils.js';

const operators = ['+', '-', '*'];

const makeExpression = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return String(firstOperand + secondOperand);
    case '-':
      return String(firstOperand - secondOperand);
    default:
      return String(firstOperand * secondOperand);
  }
};

const task = 'What is the result of the expression?';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRounds; count += 1) {
    const firstNumber = getRandomInt(0, 100);
    const secondNumber = getRandomInt(0, 100);
    const operator = operators[getRandomInt(0, 2)];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const answer = makeExpression(firstNumber, secondNumber, operator);
    const roundData = [question, answer];
    gameData.push(roundData);
  }
  playGame(task, gameData);
};
