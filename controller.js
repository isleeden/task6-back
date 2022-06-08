const Ru = require("./services/Ru");
const Us = require("./services/Us");
const Ua = require("./services/Ua");

module.exports = class Controller {
  static getRuData(req, res) {
    const { seed, limit, page, errors } = req.query;
    const offset = page * limit;
    const data = Ru.generateData(seed, offset, limit, errors);
    res.json(data);
  }

  static getUsData(req, res) {
    const { seed, limit, page, errors } = req.query;
    const offset = page * limit;
    const data = Us.generateData(seed, offset, limit, errors);
    res.json(data);
  }

  static getUaData(req, res) {
    const { seed, limit, page, errors } = req.query;
    const offset = page * limit;
    const data = Ua.generateData(seed, offset, limit, errors);
    res.json(data);
  }

  static getCsv(req, res) {
    const { seed, count, region } = req.query;
    let data;
    switch (region) {
      case "ru":
        data = Ru.generateCsv(seed, count);
        break;
      case "us":
        data = Us.generateCsv(seed, count);
        break;
      case "ua":
        data = Ua.generateCsv(seed, count);
        break;
    }
    res.json(data);
  }
};
