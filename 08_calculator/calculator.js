const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const sum = array.reduce((currentSum, item) => {
    return currentSum + item;
  }, 0);
  return sum;
}


const multiply = function(array) {
  const result = array.reduce((currentResult, item) => {
    return currentResult * item;
  }, 1);
  return result;
};

const power = function(a, b) {
	let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  };
  return result;
};

const factorial = function(a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  };
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
