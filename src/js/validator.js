/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const validator = (value) => {
  const array = Array.from(document.querySelectorAll('img'));

  if (value[0] === '3') {
    if (value[1] === '5') {
      const element = array.find((item) => item.alt === 'jcb');
      return element;
    }

    if (value[1] === '0' || value[1] === '6' || value[1] === '8' || value[1] === '9') {
      const element = array.find((item) => item.alt === 'dinersclub');
      return element;
    }

    if (value[1] === '4' || value[1] === '7') {
      const element = array.find((item) => item.alt === 'american_express');
      return element;
    }
  }

  if (value[0] === '4') {
    const element = array.find((item) => item.alt === 'visa');
    return element;
  }

  if (value[0] === '5') {
    const element = array.find((item) => item.alt === 'mastercard');
    return element;
  }

  if (value[0] === '6') {
    const element = array.find((item) => item.alt === 'discover');
    return element;
  }

  return false;
};

export default validator;
