/* eslint-disable no-unused-vars */
import luhnAlgorithm from './luhnAlgoritm';
import validator from './validator';

const input = document.getElementById('input');
const button = document.getElementById('button');
const array = Array.from(document.querySelectorAll('img'));

button.addEventListener('click', (event) => {
  event.preventDefault();

  array.forEach((element) => element.classList.remove('active'));

  if (validator(input.value) && luhnAlgorithm(input.value)) {
    const element = validator(input.value);
    element.classList.add('active');
  }
});
