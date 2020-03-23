import { playGame, numberOfRounds } from '../index.js';

import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRounds; count += 1) {
    const number = getRandomInt(0, 15);
    const question = String(number);
    const answer = getCorrectAnswer(number);
    const roundData = [question, answer];
    gameData.push(roundData);
  }
  playGame(task, gameData);
};
