import readlineSync from 'readline-sync';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const chooseElement = (array) => {
  const indexOfChoice = readlineSync.keyInSelect(array, 'Your choice?', { cancel: false });
  return array[indexOfChoice];
};

const getRandomElement = array => array[generateNumber(0, array.length)];

export { chooseElement, getRandomElement };
