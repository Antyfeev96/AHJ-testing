import validator from '../validator';
import AppCreator from '../appCreator';

const app = new AppCreator();
app.init();

test('jcb check', () => {
  app.input.value = '35';
  expect(validator(app.input.value).alt).toBe('jcb');
});

test('dinersclub check', () => {
  app.input.value = '36';
  expect(validator(app.input.value).alt).toBe('dinersclub');
});

test('american express check', () => {
  app.input.value = '37';
  expect(validator(app.input.value).alt).toBe('american_express');
});

test('visa check', () => {
  app.input.value = '4';
  expect(validator(app.input.value).alt).toBe('visa');
});

test('mastercard check', () => {
  app.input.value = '5';
  expect(validator(app.input.value).alt).toBe('mastercard');
});

test('discover check', () => {
  app.input.value = '6';
  expect(validator(app.input.value).alt).toBe('discover');
});
