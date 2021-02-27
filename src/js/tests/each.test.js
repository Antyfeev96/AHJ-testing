import AppCreator from '../appCreator';
import luhnAlgorithm from '../luhnAlgoritm';
import validator from '../validator';

const app = new AppCreator();
app.init();

test.each([
  ['true for mastercard', '5321300341660715', true],
  ['false for unvalid card', '5321300341660716', false],
])('Test shoulb be %s', (_, input, expected) => {
  expect(validator(input) && luhnAlgorithm(input)).toBe(expected);
});
