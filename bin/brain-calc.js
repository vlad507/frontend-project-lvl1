#!/usr/bin/env node

import playCalc from '../src/games/brain-calc.js';
import { greeting } from '../src/index.js';

const name = greeting();
const isDefeat = playCalc();
if (isDefeat) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
