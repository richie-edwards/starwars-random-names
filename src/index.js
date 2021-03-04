let starWarsNames = require("./starwars-names.json");
let uniqueRandomName = require("unique-random-array");

module.exports = {
  all: starWarsNames,
  random: uniqueRandomName(starWarsNames)
};
