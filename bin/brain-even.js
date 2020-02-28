#!/usr/bin/env node

import playEven from '../src/games/brain-even.js';
import { greeting } from '../src/index.js';

const name = greeting();
const isDefeat = playEven();
if (isDefeat) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
