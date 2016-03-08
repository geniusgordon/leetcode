/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
	return n % 4 !== 0;
};

for (var i = 0; i < 10; i++) {
  console.log(i, canWinNim(i));
}

