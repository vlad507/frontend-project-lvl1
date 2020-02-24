import readlineSync from 'readline-sync';

const greeting = () => {
	return readlineSync.question('Your name:');
};
export default greeting;
