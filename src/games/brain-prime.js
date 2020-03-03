import playGame from '../index.js';

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

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  const numberOfRepeat = 3;
  const nameOfGame = 'prime';
  const correctAnswer = [];
  const question = [];
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const number = getRandomInt(200);
    correctAnswer[cnt] = findDivider(number);
    question[cnt] = number;
  }
  playGame(nameOfGame, question, correctAnswer, numberOfRepeat);
};
