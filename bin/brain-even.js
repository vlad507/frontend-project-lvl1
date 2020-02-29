#!/usr/bin/env node

import playEven from '../src/games/brain-even.js';
import { greeting, defeatMessage, winMessage } from '../src/index.js';

const name = greeting();
const isDefeat = playEven();
if (isDefeat) {
  defeatMessage(name);
} else {
  winMessage(name);
}
