import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

const isDivided = (num1, num2, divider) => {
  if (num1 % divider === 0 && num2 % divider === 0) {
    return true;
  }
  return false;
};

const findMaxDivider = (firstNumber, secondNumber) => {
  let maxDivider;
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  if (firstNumber > secondNumber) {
    if (isDivided(firstNumber, secondNumber, secondNumber)) {
      return secondNumber;
    }
    maxDivider = Math.round(secondNumber / 2);
  } else {
    if (isDivided(firstNumber, secondNumber, firstNumber)) {
      return firstNumber;
    }
    maxDivider = Math.round(firstNumber / 2);
  }
  for (maxDivider; maxDivider > 1; maxDivider -= 1) {
    if (isDivided(firstNumber, secondNumber, maxDivider)) {
      return maxDivider;
    }
  }
  return maxDivider;
};

export default () => {
  const questions = [];
  const correctAnswers = [];
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const firstNumber = getRandomInt(100) + 1;
    const secondNumber = getRandomInt(100) + 1;
    questions[count] = `${firstNumber} ${secondNumber}`;
    correctAnswers[count] = String(findMaxDivider(firstNumber, secondNumber));
  }
  playGame(rulesOfGame, questions, correctAnswers);
  return 0;
};
