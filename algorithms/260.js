/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var m = {};
  nums.forEach((num) => {
    if (m[num]) {
      m[num]++;
    } else {
      m[num] = 1;
    }
  });
  var result = [];
  nums.forEach((num) => {
    if (m[num] === 1) {
      result.push(num);
    }
  });
  return result;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));

