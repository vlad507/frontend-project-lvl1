import readlineSync from 'readline-sync';

export const askName = () => readlineSync.question('Your name:');

export const greeting = () => {
  console.log('Welcome to the brain game!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const askQuestion = (number) => readlineSync.question(`Question: ${number}\n`);

export const checkEven = (number) => number % 2 === 0;

export const getCorrectEven = (number) => (checkEven(number) ? 'yes' : 'no');

export const checkAnswer = (answer, correctAnswer) => {
  if (correctAnswer === answer) {
    return true;
  }
  return false;
};

export const showResult = (answer, correctAnswer) => {
  if (checkAnswer(answer, correctAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return 1;
  }
  return 0;
};
