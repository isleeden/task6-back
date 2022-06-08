module.exports = class GenerateError {
  constructor(symbols) {
    this.symbols = symbols;
  }

  calculateChance = (value) => {
    return Math.random() < (value * 100) / 100;
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  removeRandomSymbol = (str) => {
    const position = this.getRandomInt(str.length - 1);
    return str.substring(0, position - 1) + str.substring(position, str.length);
  };

  addRandomSymbol = (str, symbols) => {
    const position = this.getRandomInt(str.length - 1);
    const randomElement =
      this.symbols[Math.floor(Math.random() * this.symbols.length)];
    return (
      str.substring(0, position) +
      randomElement +
      str.substring(position, str.length)
    );
  };

  switchRandomSymbols = (str) => {
    const position = this.getRandomIntInclusive(1, str.length - 1);
    return (
      str.substring(0, position - 1) +
      str[position] +
      str[position - 1] +
      str.substring(position + 1, str.length)
    );
  };

  randomError = (str) => {
    const number = this.getRandomIntInclusive(1, 3);
    switch (number) {
      case 1:
        return this.removeRandomSymbol(str);
      case 2:
        return this.switchRandomSymbols(str);
      case 3:
        return this.addRandomSymbol(str);
    }
  };

  makeError = (obj) => {
    const number = this.getRandomIntInclusive(1, 3);
    switch (number) {
      case 1:
        obj.address = this.randomError(obj.address);
        break;
      case 2:
        obj.name = this.randomError(obj.name);
        break;
      case 3:
        obj.phone = this.randomError(obj.phone);
        break;
    }
    return obj;
  };
};
