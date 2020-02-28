#!/usr/bin/env node

import playGCD from '../src/games/brain-gcd.js';
import { greeting } from '../src/index.js';

const name = greeting();
const isDefeat = playGCD();
if (isDefeat) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
