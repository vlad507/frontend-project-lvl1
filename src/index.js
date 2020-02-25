import readlineSync from 'readline-sync';

const greeting = () => readlineSync.question('Your name:');

export default greeting;
