function X4(x1,y1,x2,y2,x3,y3) {
	var x12 = x2 - x1;
	var y12 = y2 - y1;
	var x13 = x3 - x1;
	var y13 = y3 - y1;
	var sk1213= x12*x13+y12*y13;
	var L12 = Math.sqrt(x12*x12+y12*y13);
	var L13 = Math.sqrt(x13*x13+y13*y13);
	var cos213 = sk1213/(L12*L13);
	if (cos213 == 0) return (x12+x3);
	
	var x21 = x1 - x2;
	var y21 = y1 - y2;
	var x23 = x3 - x2;
	var y23 = y3 - y2;
	var sk2123= x21*x23+y21*y23;
	var L21 = Math.sqrt(x21*x21+y21*y21);
	var L23 = Math.sqrt(x23*x23+y23*y23);
	var cos123 = sk2123/(L21*L23);
	if (cos123 == 0) return (x21+x3);
	
	var x31 = x1 - x3;
	var y31 = y1 - y3;
	var x32 = x2 - x3;
	var y32 = y2 - y3;
	var sk3132= x31*x32+y31*y32;
	var L31 = Math.sqrt(x31*x31+y31*y31);
	var L32 = Math.sqrt(x32*x32+y32*y32);
	var cos132 = sk3132/(L31*L32);
	if (cos132 == 0) return (x31+x2);
}

function Y4(x1,y1,x2,y2,x3,y3) {
	var x12 = x2 - x1;
	var y12 = y2 - y1;
	var x13 = x3 - x1;
	var y13 = y3 - y1;
	var sk1213= x12*x13+y12*y13;
	var L12 = Math.sqrt(x12*x12+y12*y13);
	var L13 = Math.sqrt(x13*x13+y13*y13);
	var cos213 = sk1213/(L12*L13);
	if (cos213 == 0) return (y12+y3);
	
	var x21 = x1 - x2;
	var y21 = y1 - y2;
	var x23 = x3 - x2;
	var y23 = y3 - y2;
	var sk2123= x21*x23+y21*y23;
	var L21 = Math.sqrt(x21*x21+y21*y21);
	var L23 = Math.sqrt(x23*x23+y23*y23);
	var cos123 = sk2123/(L21*L23);
	if (cos123 == 0) return (y21+y3);
	
	var x31 = x1 - x3;
	var y31 = y1 - y3;
	var x32 = x2 - x3;
	var y32 = y2 - y3;
	var sk3132= x31*x32+y31*y32;
	var L31 = Math.sqrt(x31*x31+y31*y31);
	var L32 = Math.sqrt(x32*x32+y32*y32);
	var cos132 = sk3132/(L31*L32);
	if (cos132 == 0) return (y31+y2);
}