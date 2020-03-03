import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('Your name:');

const greeting = () => {
  console.log('Welcome to the brain game!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  return name;
};

const defeatMessage = (name) => console.log(`Let's try again, ${name}!`);

const winMessage = (name) => console.log(`Congratulations, ${name}!`);

const askQuestion = (number) => readlineSync.question(`Question: ${number}\n`);

const checkAnswer = (answer, correctAnswer) => {
  if (correctAnswer === answer) {
    return true;
  }
  return false;
};

const showResult = (answer, correctAnswer) => {
  if (checkAnswer(answer, correctAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return 1;
  }
  return 0;
};

export default (nameOfGame, questions, correctAnswers, numberOfRepeat) => {
  const name = greeting();
  if (nameOfGame === 'calc') {
    console.log('What is the result of the expression?');
  } else if (nameOfGame === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (nameOfGame === 'progression') {
    console.log('What number is missing in the progression?');
  } else if (nameOfGame === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (nameOfGame === 'prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const answer = askQuestion(questions[cnt]);
    const isWrong = showResult(answer, correctAnswers[cnt]);
    if (isWrong) {
      defeatMessage(name);
      return 1;
    }
  }
  winMessage(name);
  return 0;
};
