/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var m = {};
  for (var i = 0; i < nums.length; i++) {
    if (m[nums[i]] !== undefined) {
      return [m[nums[i]], i];
    } else {
      m[target - nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

