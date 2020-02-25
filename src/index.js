import readlineSync from 'readline-sync';

export const askName = () => readlineSync.question('Your name:');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const askQuestion = (number) => readlineSync.question(`Question: ${number}\n`);

const checkEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (checkEven(number) ? 'yes' : 'no');

const checkAnswer = (answer, correctAnswer) => {
  if (correctAnswer === answer) {
    return true;
  }
  return false;
};

export const playEven = () => {
  for (let cnt = 0; cnt < 3; cnt += 1) {
    const number = getRandomInt(15);
    const answer = askQuestion(number);
    const correctAnswer = getCorrectAnswer(number);
    if (checkAnswer(answer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return 1;
    }
  }
  return 0;
};
