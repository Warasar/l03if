function f(x,y,z) {
	var a,b,c,min;
	a = x + y + z;
	b = x * y * z;
	c = x * y + z;
	if (a < b && a < c) {
		min = a;
	} else
	if (b < a && b < c) {
		min = b;
	} else {
		min = c;
	}
	return min;
}

module.exports = f;