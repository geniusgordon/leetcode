/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num - 9 * Math.floor((num - 1) / 9);
};

console.log(addDigits(65536));

