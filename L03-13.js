function S (x1,y1,x2,y2,x3,y3){
	var i = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	var k = Math.sqrt((x2-x3)*(x2-x3)+(y2-y3)*(y2-y3));
	var j = Math.sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1));

	if (i == 0 || k == 0 || j == 0)
		return false;
	if (i>k) {
		if (k == j && i == Math.sqrt(k*k+j*j))
			return true;
		else 
			return false;
	}
	if (k>j) {
		if (j == i && k == Math.sqrt(j*j+i*i))
			return true;
		else
			return false;
	}
	if (j>i) {
		if (i == k && j == Math.sqrt(i*i+k*k))
			return true;
		else
			return false;
	}
}