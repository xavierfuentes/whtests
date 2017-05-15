// @flow
const combinationsOfUkCoinsFor = require('./index');

test('counts the number of combinations of UK coins for a specific amount', () => {
  expect(combinationsOfUkCoinsFor(0)).toBe(1);
  expect(combinationsOfUkCoinsFor(-1)).toBe(0);
  expect(combinationsOfUkCoinsFor(1)).toBe(1);
  expect(combinationsOfUkCoinsFor(2)).toBe(2);
  expect(combinationsOfUkCoinsFor(3)).toBe(2);
  expect(combinationsOfUkCoinsFor(5)).toBe(4);
  expect(combinationsOfUkCoinsFor(10)).toBe(11);
});
