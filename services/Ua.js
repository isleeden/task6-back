const GenerateData = require("./GenerateData");
const phones = require("../ua/phones.json");
const cities = require("../ua/cities.json");
const streets = require("../ua/streets.json");
const fe_f_names = require("../ua/fe_f_names.json");
const fe_l_names = require("../ua/fe_l_names.json");
const fe_m_names = require("../ua/fe_m_names.json");
const ma_f_names = require("../ua/ma_f_names.json");
const ma_l_names = require("../ua/ma_l_names.json");
const ma_m_names = require("../ua/ma_m_names.json");

module.exports = new GenerateData(
  phones,
  cities,
  streets,
  fe_f_names,
  fe_m_names,
  fe_l_names,
  ma_f_names,
  ma_m_names,
  ma_l_names
);