/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var length = nums.length;
  var zeros = 0;
  var move = [];
  var i;
  for (i = 0; i < length; i++) {
    if (nums[i] === 0) {
      zeros++;
    } else {
      if (zeros > 0) {
        nums[i - zeros] = nums[i];
        nums[i] = 0;
      }
    }
  }
};

var nums = [0, 1, 0, 3, 12];
console.log(nums);
moveZeroes(nums);
console.log(nums);

