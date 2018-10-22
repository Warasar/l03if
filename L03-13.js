function S(x1,y1,x2,y2,x3,y3) {
	var a,b,c;
	a = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
	b = Math.sqrt((x2-x3)*(x2-x3)+(y2-y3)*(y2-y3));
	c = Math.sqrt((x1-x3)*(x1-x3)+(y1-y3)*(y1-y3));
	if (a==0 || b==0 || c==0) {
		return false;
	}
	if (a>b) {
		if (b==c && a==Math.sqrt(b*b+c*c)) {
			return true;
		} else {
		    return false;
	    }
	} if (b>a) {
		if (a==c && b==Math.sqrt(a*a+c*c)) {
			return true;
		} else {
		    return false;
	    }
	} if (c>a) {
		if (a==b && c==Math.sqrt(a*a+b*b)) {
			return true;
		} else {
		    return false;
	    }
	} else {
		return false;
	}
}
