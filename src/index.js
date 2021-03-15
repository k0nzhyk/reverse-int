module.exports = function reverse (n) {
	n = n + "";
	return parseInt(n.split("").reverse().join(""));
}
