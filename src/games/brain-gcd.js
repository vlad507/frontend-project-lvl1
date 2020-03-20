import { playGame, numberOfRounds } from '../index.js';

import getRandomInt from '../utils.js';

const findMaxDivider = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findMaxDivider(secondNumber, firstNumber % secondNumber);
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRounds; count += 1) {
    const firstNumber = getRandomInt(0, 100);
    const secondNumber = getRandomInt(0, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(findMaxDivider(firstNumber, secondNumber));
    const roundData = [question, answer];
    gameData.push(roundData);
  }
  playGame(task, gameData);
};
