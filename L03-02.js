function f (a, b, c, d) {
	var min1, min2, res;
	if (a>b)
		min1=b;
	else
		min1=a;
	if (c>d)
		min2=d;
	else 
		min2=c;
	if (min1>min2)
		res=min1;
	else 
		res=min2;

	return res;
}