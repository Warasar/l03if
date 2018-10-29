function h(a,b,c){
	var h;
	var s;
	var p;
	p=(a+b+c)/2;
	s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	h = 2*s/a;
	if (h>0)
		return h 
	else
		return 1 
}