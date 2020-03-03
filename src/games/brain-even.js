import playGame from '../index.js';

const checkEven = (number) => number % 2 === 0;

const getCorrectEven = (number) => (checkEven(number) ? 'yes' : 'no');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  const nameOfGame = 'even';
  const numberOfRepeat = 3;
  const question = [];
  const correctAnswer = [];
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const number = getRandomInt(15);
    question[cnt] = number;
    correctAnswer[cnt] = getCorrectEven(number);
  }
  playGame(nameOfGame, question, correctAnswer, numberOfRepeat);
  return 0;
};
