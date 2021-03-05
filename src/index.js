let starWarsNames = require("./starwars-names.json");
let uniqueRandomName = require("unique-random-array");

const random = (num=1) => {
  const getRandomItem = uniqueRandomName(starWarsNames)
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(getRandomItem());
  }
  return result.length === 1 ? result[0] : result;
}

module.exports = {
  all: starWarsNames,
  random: random
};


