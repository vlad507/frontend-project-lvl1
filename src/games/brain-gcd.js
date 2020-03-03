import playGame from '../index.js';

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

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  const numberOfRepeat = 3;
  const nameOfGame = 'gcd';
  const question = [];
  const correctAnswer = [];
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const firstNumber = getRandomInt(100) + 1;
    const secondNumber = getRandomInt(100) + 1;
    question[cnt] = `${firstNumber} ${secondNumber}`;
    correctAnswer[cnt] = String(findMaxDivider(firstNumber, secondNumber));
  }
  playGame(nameOfGame, question, correctAnswer, numberOfRepeat);
  return 0;
};
