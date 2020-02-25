#!/usr/bin/env node

import { askName, playEven } from '../src/index.js';

console.log('Welcome to the brain game!');
const name = askName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isDefeat = playEven();
if (isDefeat) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
