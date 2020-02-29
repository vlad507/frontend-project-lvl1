import readlineSync from 'readline-sync';

export const askName = () => readlineSync.question('Your name:');

export const greeting = () => {
  console.log('Welcome to the brain game!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  return name;
};

export const defeatMessage = (name) => console.log(`Let's try again, ${name}!`);

export const winMessage = (name) => console.log(`Congratulations, ${name}!`);

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

const isDivided = (num1, num2, divider) => {
  if (num1 % divider === 0 && num2 % divider === 0) {
    return true;
  }
  return false;
};

export const findMaxDivider = (firstNumber, secondNumber) => {
  let maxDivider;
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  if (firstNumber > secondNumber) {
    if (isDivided(firstNumber, secondNumber, secondNumber)) {
      return secondNumber;
    }
    maxDivider = Math.round(secondNumber / 2);
  } else {
    if (isDivided(firstNumber, secondNumber, firstNumber)) {
      return firstNumber;
    }
    maxDivider = Math.round(firstNumber / 2);
  }
  for (maxDivider; maxDivider > 1; maxDivider -= 1) {
    if (isDivided(firstNumber, secondNumber, maxDivider)) {
      return maxDivider;
    }
  }
  return maxDivider;
};

export const findDivider = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
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
