import {
  getRandomInt, askQuestion, showResult,
} from '../index.js';

export default () => {
  console.log('What number is missing in the progression?');
  const numberOfItems = 10;
  for (let cnt = 0; cnt < 3; cnt += 1) {
    const progression = [];
    const firstItem = getRandomInt(100);
    const difference = getRandomInt(20) + 1;
    const position = getRandomInt(numberOfItems);
    for (let num = 0; num < numberOfItems; num += 1) {
      progression[num] = firstItem + num * difference;
    }
    const correctAnswer = String(progression[position]);
    progression[position] = '..';
    const answer = askQuestion(`${progression.join(' ')}`);
    const isWrongAnswer = showResult(answer, correctAnswer);
    if (isWrongAnswer) {
      return 1;
    }
  }
  return 0;
};
