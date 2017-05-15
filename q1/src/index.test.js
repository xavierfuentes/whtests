// @flow
const reverseSentence = require('./index');

test('Reverses the order of the words in a sentence', () => {
  expect(reverseSentence('Welcome to William Hill')).toBe('Hill William to Welcome');
  expect(reverseSentence('Enjoy the test')).toBe('test the Enjoy');
  expect(reverseSentence(' My     name is  Xavi  ')).toBe('Xavi is name My');
});
