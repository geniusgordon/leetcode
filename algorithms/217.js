/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var m = {};
  for (var i = 0; i < nums.length; i++) {
    if (m[nums[i]]) {
      return true;
    }
    m[nums[i]] = true;
  }
  return false;
};

