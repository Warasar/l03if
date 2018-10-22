function f(k,b,R) {
	var d;
	d = 4*k*k*R*R-4*b*b+4*R*R;
	if (d>0) {
		return 2;
	} else if (d==0) {
		return 1;
	} else {
		return 0;
	}
}
