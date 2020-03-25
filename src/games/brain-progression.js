import { playGame, numberOfRounds } from '../index.js';

import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const createProgression = (firstItem, difference, length) => {
  const progression = [];
  for (let num = 0; num < length; num += 1) {
    progression.push(firstItem + num * difference);
  }
  return progression;
};

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRounds; count += 1) {
    const firstItem = getRandomInt(0, 100);
    const difference = getRandomInt(1, 20);
    const hiddenItemIndex = getRandomInt(0, lengthOfProgression - 1);
    const progression = createProgression(firstItem, difference, lengthOfProgression);
    const answer = String(progression[hiddenItemIndex]);
    progression[hiddenItemIndex] = '..';
    const question = progression.join(' ');
    const roundData = [question, answer];
    gameData.push(roundData);
  }
  playGame(task, gameData);
};
