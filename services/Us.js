const GenerateData = require("./GenerateData");
const phones = require("../us/phones.json");
const cities = require("../us/cities.json");
const streets = require("../us/streets.json");
const fe_f_names = require("../us/fe_f_names.json");
const fe_l_names = require("../us/fe_l_names.json");
const fe_m_names = require("../us/fe_m_names.json");
const ma_f_names = require("../us/ma_f_names.json");
const ma_l_names = require("../us/ma_l_names.json");
const ma_m_names = require("../us/ma_m_names.json");
const symbols = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
const { getName } = require("../utils");

class UsGenerateData extends GenerateData {
  getFullName(seed, f_names, l_names, m_names) {
    return `${getName(seed, f_names)} ${getName(seed, m_names)} ${getName(
      seed,
      l_names
    )}`;
  }
}

module.exports = new UsGenerateData(
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
);
