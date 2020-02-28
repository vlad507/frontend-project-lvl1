#!/usr/bin/env node

import playProgression from '../src/games/brain-progression.js';
import { greeting } from '../src/index.js';

const name = greeting();
const isDefeat = playProgression();
if (isDefeat) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
