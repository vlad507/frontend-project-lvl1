#!/usr/bin/env node

import askName from '../src/index';

console.log('Welcome to the brain game!\n');
const name = askName();
console.log(`Hello, ${name}!`);
