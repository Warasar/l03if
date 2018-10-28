function f(k,b,R){
	var n,d;
	d=4*(b*b)*(k*k)-4*((k*k)+1)*(b-(R*R));
	if (d>0) 
		n=2;
	else 
		if (d==0)
			n=1;
		else 
			n=0;
	return n;
}
