 function S(x1,y1,x2,y2,x3,y3) {
	var b1,b2,b3,p,res;
	b1 = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	b2 = Math.sqrt(Math.pow((x3-x2),2)+Math.pow((y3-y2),2));
	b3 = Math.sqrt(Math.pow((x1-x3),2)+Math.pow((y1-y3),2));
	p = (b1+b2+b3)/2;
	if (b1==b2 || b2==b3 || b1==b3)
		res = Math.sqrt(p*(p-b1)*(p-b2)*(p-b3));
	else res = -1;
	return res;
}	