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

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const round = [];
    const firstNumber = getRandomInt(0, 100);
    const secondNumber = getRandomInt(0, 100);
    round.push(`${firstNumber} ${secondNumber}`);
    round.push(String(findMaxDivider(firstNumber, secondNumber)));
    gameData.push(round);
  }
  playGame(rulesOfGame, gameData);
};
