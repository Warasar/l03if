function f (a,b,c,d) {
	var max1 = 0;
	var max2 = 0;
	var min =0;

	if (a < b) 
		max1 = b;
			else 
				max1 = a;
	if (c < d) 
		max2 = d;
			else
				max2 = c;
	if (max1 > max2) 
		min = max2;
			else
				min = max1;
	return min;
}