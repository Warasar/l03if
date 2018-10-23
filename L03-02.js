function f(a,b,c,d) {
	var min1, min2, max;
	if(a < b)
		min1 = a;
	else
		min1 = b;

	if(c > d)
		min2 = d;
	else
		min2 = c;

	if (min1>min2)
		max = min1;
	else
		max = min2;

	return max;



}
