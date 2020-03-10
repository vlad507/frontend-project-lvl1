import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

const findDivider = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const correctAnswers = [];
  const questions = [];
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const number = getRandomInt(200);
    correctAnswers[count] = findDivider(number);
    questions[count] = number;
  }
  playGame(rulesOfGame, questions, correctAnswers);
};
