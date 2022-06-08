const seedrandom = require("seedrandom");
const { getBool, getName, getAddress, getPhone } = require("../utils");
const { parse } = require("json2csv");
const GenerateError = require("./GenerateError");

module.exports = class GenerateData {
  constructor(
    phones,
    cities,
    streets,
    fe_f_names,
    fe_m_names,
    fe_l_names,
    ma_f_names,
    ma_m_names,
    ma_l_names,
    symbols
  ) {
    this.phones = phones;
    this.cities = cities;
    this.streets = streets;
    this.fe_f_names = fe_f_names;
    this.fe_m_names = fe_m_names;
    this.fe_l_names = fe_l_names;
    this.ma_f_names = ma_f_names;
    this.ma_m_names = ma_m_names;
    this.ma_l_names = ma_l_names;

    this.GenerateError = new GenerateError(symbols);
  }

  generateName(seed) {
    const isMale = getBool(seed);
    return isMale ? this.getMaleName(seed) : this.getFemaleName(seed);
  }

  getFullName(seed, f_names, l_names, m_names) {
    return `${getName(seed, f_names)} ${getName(seed, l_names)} ${getName(
      seed,
      m_names
    )}`;
  }

  getMaleName(seed) {
    return this.getFullName(
      seed,
      this.ma_f_names,
      this.ma_l_names,
      this.ma_m_names
    );
  }

  getFemaleName(seed) {
    return this.getFullName(
      seed,
      this.fe_f_names,
      this.fe_l_names,
      this.fe_m_names
    );
  }

  generatePhone(seed) {
    return getPhone(seed, this.phones);
  }

  generateAddress(seed) {
    return getAddress(seed, this.cities, this.streets);
  }

  generateData(userSeed, offset, limit, errors) {
    let result = [];

    for (let i = offset; i < parseInt(offset) + parseInt(limit); i++) {
      var rng = seedrandom(userSeed + offset + i);
      const seed = rng.int32();
      result.push({
        number: i + 1,
        id: Math.abs(seed),
        name: this.generateName(seed),
        phone: this.generatePhone(seed),
        address: this.generateAddress(seed),
      });
    }

    result = result.map((obj) => {
      for (let i = 0; i < errors; i++) this.GenerateError.makeError(obj);
      return obj;
    });

    return result;
  }

  generateCsv(seed, count) {
    const jsonData = this.generateData(seed, 0, count);
    return parse(jsonData);
  }
};
