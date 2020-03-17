import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

const rulesOfGame = 'What number is missing in the progression?';

export default () => {
  const numberOfItems = 10;
  const gameData = [];
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const round = [];
    const progression = [];
    const firstItem = getRandomInt(0, 100);
    const difference = getRandomInt(1, 20);
    const position = getRandomInt(0, numberOfItems);
    for (let num = 0; num < numberOfItems; num += 1) {
      progression.push(firstItem + num * difference);
    }
    const correctAnswer = String(progression[position]);
    progression[position] = '..';
    round.push(`${progression.join(' ')}`);
    round.push(correctAnswer);
    gameData.push(round);
  }
  playGame(rulesOfGame, gameData);
};
