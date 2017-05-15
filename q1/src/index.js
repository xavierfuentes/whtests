// @flow
const fs = require('fs');
const readline = require('readline');

function reverseSentence(sentence: string): string {
  return sentence
    .trim() // trim white spaces
    .replace(/\s+/g, ' ') // consolidate multi white spaces
    .split(/\s/) // convert to array
    .reverse() // invert the order
    .join(' '); // put it back together
}

/* eslint-disable no-console */
if (process.argv.length < 3) {
  console.log(`Usage: node ${process.argv[1]} input.txt`);
  process.exit(1);
}

const inputFilePath = `${__dirname}/${process.argv[2]}`;
const inputFile = fs.createReadStream(inputFilePath);
const lineReader = readline.createInterface({
  input: inputFile,
  output: process.stdout,
});

lineReader.on('line', (sentence: string) => {
  console.log(reverseSentence(sentence));
});
/* eslint-enable no-console */

module.exports = reverseSentence;
