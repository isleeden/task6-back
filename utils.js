const getBool = (seed) => {
  return Boolean(seed % 2);
};

const getIndex = (seed, length) => {
  return Math.abs(seed % length);
};

const shuffle = (seed, array) => {
  array.sort(() => seed);
};

const selectRandom = (seed, array) => {
  return array[getIndex(seed, array.length)];
};

const getRandomSeparator = (seed) => {
  const separators = ["-", " ", "", "/"];
  return selectRandom(seed, separators);
};

const getAddress = (seed, cities, streets) => {
  const address =
    selectRandom(seed, streets) + " " + selectRandom(seed, cities);
  const splitedAddress = address.split(" ");
  shuffle(seed, splitedAddress);
  return splitedAddress.join(" ");
};

const getName = (seed, names) => {
  return selectRandom(seed, names);
};

const getPhone = (seed, phones) => {
  const phone = selectRandom(seed, phones)
    .split(" ")
    .join(getRandomSeparator(seed));
  return phone;
};

module.exports = {
  getBool,
  getIndex,
  shuffle,
  selectRandom,
  getRandomSeparator,
  getAddress,
  getName,
  getPhone,
};
