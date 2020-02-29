#!/usr/bin/env node

import playPrime from '../src/games/brain-prime.js';
import { greeting } from '../src/index.js';

const name = greeting();
const isDefeat = playPrime();
if (isDefeat) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
