import { playGame, numberOfRounds } from '../index.js';

import getRandomInt from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRounds; count += 1) {
    const number = getRandomInt(0, 200);
    const question = String(number);
    const answer = getCorrectAnswer(number);
    const roundData = [question, answer];
    gameData.push(roundData);
  }
  playGame(task, gameData);
};
