import {
  getRandomInt, askQuestion, findDivider, showResult,
} from '../index.js';

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let cnt = 0; cnt < 3; cnt += 1) {
    const number = getRandomInt(200);
    const correctAnswer = findDivider(number);
    const answer = askQuestion(`${number}`);
    const isWrongAnswer = showResult(answer, correctAnswer);
    if (isWrongAnswer) {
      return 1;
    }
  }
  return 0;
};
