import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

export default () => {
  const numberOfItems = 10;
  const questions = [];
  const correctAnswers = [];
  const rulesOfGame = 'What number is missing in the progression?';
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const progression = [];
    const firstItem = getRandomInt(100);
    const difference = getRandomInt(20) + 1;
    const position = getRandomInt(numberOfItems);
    for (let num = 0; num < numberOfItems; num += 1) {
      progression[num] = firstItem + num * difference;
    }
    correctAnswers[count] = String(progression[position]);
    progression[position] = '..';
    questions[count] = `${progression.join(' ')}`;
  }
  playGame(rulesOfGame, questions, correctAnswers);
  return 0;
};
