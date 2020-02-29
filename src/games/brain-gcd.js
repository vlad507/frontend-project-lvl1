import {
  getRandomInt, askQuestion, findMaxDivider, showResult,
} from '../index.js';

export default () => {
  const numberOfRepeat = 3;
  console.log('Find the greatest common divisor of given numbers.');
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const firstNumber = getRandomInt(100) + 1;
    const secondNumber = getRandomInt(100) + 1;
    const answer = askQuestion(`${firstNumber} ${secondNumber}`);
    const correctAnswer = String(findMaxDivider(firstNumber, secondNumber));
    const isWrongAnswer = showResult(answer, correctAnswer);
    if (isWrongAnswer) {
      return 1;
    }
  }
  return 0;
};
