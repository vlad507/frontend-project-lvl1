import { playGame, numberOfRepeat } from '../index.js';

import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

export default () => {
  const questions = [];
  const correctAnswers = [];
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let count = 0; count < numberOfRepeat; count += 1) {
    const number = getRandomInt(15);
    questions[count] = number;
    correctAnswers[count] = getCorrectAnswer(number);
  }
  playGame(rulesOfGame, questions, correctAnswers);
  return 0;
};
