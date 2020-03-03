import playGame from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  const numberOfRepeat = 3;
  const nameOfGame = 'progression';
  const numberOfItems = 10;
  const question = [];
  const correctAnswer = [];
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const progression = [];
    const firstItem = getRandomInt(100);
    const difference = getRandomInt(20) + 1;
    const position = getRandomInt(numberOfItems);
    for (let num = 0; num < numberOfItems; num += 1) {
      progression[num] = firstItem + num * difference;
    }
    correctAnswer[cnt] = String(progression[position]);
    progression[position] = '..';
    question[cnt] = `${progression.join(' ')}`;
  }
  playGame(nameOfGame, question, correctAnswer, numberOfRepeat);
  return 0;
};
