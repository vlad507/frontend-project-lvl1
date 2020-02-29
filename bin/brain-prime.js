#!/usr/bin/env node

import playPrime from '../src/games/brain-prime.js';
import { greeting, defeatMessage, winMessage } from '../src/index.js';

const name = greeting();
const isDefeat = playPrime();
if (isDefeat) {
  defeatMessage(name);
} else {
  winMessage(name);
}
