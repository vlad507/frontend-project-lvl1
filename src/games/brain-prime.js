import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const round = [];
    const number = getRandomInt(0, 200);
    round.push(number);
    round.push(getCorrectAnswer(number));
    gameData.push(round);
  }
  playGame(rulesOfGame, gameData);
};
