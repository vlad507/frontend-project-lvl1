import readlineSync from 'readline-sync';

export const numberOfRepeat = 3;

export const playGame = (rulesOfGame, gameData) => {
  console.log('Welcome to the brain game!');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);
  console.log(rulesOfGame);
  for (let cnt = 0; cnt < numberOfRepeat; cnt += 1) {
    const [question, correctAnswer] = gameData[cnt];
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
