function f(a,b,c,d) {
	var m1, m2, res;
	if (a<b) {
        m1 = a;
	} else {
		m1 = b;
	}

	if (c<d) {
		m2 = c;
	} else {
		m2 = d;
	}

    if (m1>m2) {
    	res = m1;
    } else {
    	res = m2;
    }
    
	return res;
}
