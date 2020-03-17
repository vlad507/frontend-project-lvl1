import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const gameData = [];
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const round = [];
    const number = getRandomInt(0, 15);
    round.push(number);
    round.push(getCorrectAnswer(number));
    gameData.push(round);
  }
  playGame(rulesOfGame, gameData);
};
