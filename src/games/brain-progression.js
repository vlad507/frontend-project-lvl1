import { playGame, numberOfRounds } from '../index.js';

import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

export default () => {
  const numberOfItems = 10;
  const gameData = [];
  for (let count = 0; count < numberOfRounds; count += 1) {
    const progression = [];
    const firstItem = getRandomInt(0, 100);
    const difference = getRandomInt(1, 20);
    const position = getRandomInt(0, numberOfItems);
    for (let num = 0; num < numberOfItems; num += 1) {
      progression.push(firstItem + num * difference);
    }
    const answer = String(progression[position]);
    progression[position] = '..';
    const question = (`${progression.join(' ')}`);
    const roundData = [question, answer];
    gameData.push(roundData);
  }
  playGame(task, gameData);
};
