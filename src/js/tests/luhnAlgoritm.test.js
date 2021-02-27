import luhnAlgorithm from '../luhnAlgoritm';

test('card should be valid', () => {
  const card = 5321300341660715;
  expect(luhnAlgorithm(card)).toBe(true);
});

test('card should not be valid', () => {
  const card = 5321300341660716;
  expect(luhnAlgorithm(card)).toBe(false);
});
