let starWarsNames = require("./starwars-names.json");
let uniqueRandomName = require("unique-random-array");

const random = (num=1) => {
  const getRandomItem = uniqueRandomName(starWarsNames)
  const myResult = [];
  for (let i = 1; i <= num; i++) {
    myResult.push(getRandomItem());
  }
  return myResult.length === 1 ? myResult[0] : myResult;
}

module.exports = {
  all: starWarsNames,
  random: random
};


