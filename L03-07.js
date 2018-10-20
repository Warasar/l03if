function S(x1,y1,x2,y2,x3,y3) {
	var a,b,c,p,res;
	a=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
	b=Math.sqrt(Math.pow(x2-x3,2)+Math.pow(y2-y3,2));
	c=Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2));
	p=(a+b+c)/2;
		if (a==b || b==c || c==a)
			res=Math.sqrt(p*(p-a)*(p-b)*(p-c));
		else res=(-1);
		return res;
}