/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var last = {};
  var pre = [];
  var curr = 0;
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    if (last[s[i]] === undefined) {
      pre[i] = -1;
    } else {
      pre[i] = last[s[i]];
    }
    if (pre[i] >= curr) {
      curr = pre[i] + 1;
    }
    result = Math.max(result, i - curr + 1);
    last[s[i]] = i;
  }
  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('abba'));

