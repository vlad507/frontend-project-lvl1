import readlineSync from 'readline-sync';

export const numberOfRepeat = 3;

export const playGame = (rulesOfGame, questions, correctAnswers) => {
  console.log('Welcome to the brain game!');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);
  console.log(rulesOfGame);
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const answer = readlineSync.question(`Question: ${questions[cnt]}\n`);
    const isWrong = answer !== correctAnswers[cnt];
    if (isWrong) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswers[cnt]}".`);
      console.log(`Let's try again, ${name}!`);
      return 1;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};
