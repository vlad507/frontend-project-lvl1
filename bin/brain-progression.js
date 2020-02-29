#!/usr/bin/env node

import playProgression from '../src/games/brain-progression.js';
import { greeting, defeatMessage, winMessage } from '../src/index.js';

const name = greeting();
const isDefeat = playProgression();
if (isDefeat) {
  defeatMessage(name);
} else {
  winMessage(name);
}
