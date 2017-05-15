'use strict';

const readline = require('readline');

function combinationsOfUkCoinsFor(amount) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  const combinationsFor = [];

  if (amount < 0) return 0; // a negative amount of money doesn't exist (for this problem)

  // we fill the array with zeroes up until combinationsFor[amount]
  for (let i = 0; i <= amount; i += 1) {
    combinationsFor[i] = 0;
  }

  combinationsFor[0] = 1; // one combination returns 0 coins

  for (let j = 0; j < coins.length; j += 1) {
    const coin = coins[j]; // we use only coins available in our initial list

    // we skip coins higher than the amount
    for (let higherAmount = coin; higherAmount <= amount; higherAmount += 1) {
      // use the subproblem solution adding the solution from the top
      const higherAmountRemainder = higherAmount - coin;
      combinationsFor[higherAmount] += combinationsFor[higherAmountRemainder];
    }
  }

  return combinationsFor[amount];
}

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* eslint-disable no-console */
console.log('### COIN COUNTER ###');
console.log('- Type a number to find out how many combination(s) of UK coins are for that value');

lineReader.on('line', coin => {
  console.log(`There are ${combinationsOfUkCoinsFor(coin)} combinations`);
  console.log('Try typing another number or press ctrl+c to exit');
});
/* eslint-enable no-console */

module.exports = combinationsOfUkCoinsFor;
