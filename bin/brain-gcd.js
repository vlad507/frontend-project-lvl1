#!/usr/bin/env node

import playGCD from '../src/games/brain-gcd.js';
import { greeting, defeatMessage, winMessage } from '../src/index.js';

const name = greeting();
const isDefeat = playGCD();
if (isDefeat) {
  defeatMessage(name);
} else {
  winMessage(name);
}
