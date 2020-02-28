import {
  getRandomInt, askQuestion, showResult,
} from '../index.js';

export default () => {
  const operands = ['+', '-', '*'];
  for (let cnt = 0; cnt < 3; cnt += 1) {
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    const mathSign = operands[getRandomInt(2)];
    const answer = askQuestion(`${firstNumber} ${mathSign} ${secondNumber}`);
    let correctAnswer;
    if (mathSign === '+') {
      correctAnswer = String(firstNumber + secondNumber);
    } else if (mathSign === '-') {
      correctAnswer = String(firstNumber - secondNumber);
    } else {
      correctAnswer = String(firstNumber * secondNumber);
    }
    const isWrongAnswer = showResult(answer, correctAnswer);
    if (isWrongAnswer) {
      return 1;
    }
  }
  return 0;
};
