#!/usr/bin/env node

import playCalc from '../src/games/brain-calc.js';
import { greeting, defeatMessage, winMessage } from '../src/index.js';

const name = greeting();
const isDefeat = playCalc();
if (isDefeat) {
  defeatMessage(name);
} else {
  winMessage(name);
}
