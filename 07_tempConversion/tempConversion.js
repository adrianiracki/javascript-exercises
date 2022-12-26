const convertToCelsius = function(fahrenheitDegrees) {
  return Number(((fahrenheitDegrees - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(celsiusDegrees) {
  return Number((celsiusDegrees * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
