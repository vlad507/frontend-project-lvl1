import {
  getRandomInt, askQuestion, getCorrectEven, showResult,
} from '../index.js';

export default () => {
  const numberOfRepeat = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const number = getRandomInt(15);
    const answer = askQuestion(number);
    const correctAnswer = getCorrectEven(number);
    const isWrongAnswer = showResult(answer, correctAnswer);
    if (isWrongAnswer) {
      return 1;
    }
  }
  return 0;
};
