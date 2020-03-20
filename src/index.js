import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const playGame = (task, gameData) => {
  console.log('Welcome to the brain game!');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let count = 0; count < numberOfRounds; count += 1) {
    const [question, correctAnswer] = gameData[count];
    const answer = readlineSync.question(`Question: ${question}\n`);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
