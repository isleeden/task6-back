const GenerateData = require("./GenerateData");
const phones = require("../ru/phones.json");
const cities = require("../ru/cities.json");
const streets = require("../ru/streets.json");
const fe_f_names = require("../ru/fe_f_names.json");
const fe_l_names = require("../ru/fe_l_names.json");
const fe_m_names = require("../ru/fe_m_names.json");
const ma_f_names = require("../ru/ma_f_names.json");
const ma_l_names = require("../ru/ma_l_names.json");
const ma_m_names = require("../ru/ma_m_names.json");

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
