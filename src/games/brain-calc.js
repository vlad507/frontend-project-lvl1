import playGame from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  const nameOfGame = 'calc';
  const operands = ['+', '-', '*'];
  const numberOfRepeat = 3;
  const question = [];
  const correctAnswer = [];
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    const mathSign = operands[getRandomInt(2)];
    question[cnt] = `${firstNumber} ${mathSign} ${secondNumber}`;
    if (mathSign === '+') {
      correctAnswer[cnt] = String(firstNumber + secondNumber);
    } else if (mathSign === '-') {
      correctAnswer[cnt] = String(firstNumber - secondNumber);
    } else {
      correctAnswer[cnt] = String(firstNumber * secondNumber);
    }
  }
  playGame(nameOfGame, question, correctAnswer, numberOfRepeat);
  return 0;
};
