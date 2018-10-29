function scal(x1,y1,x2,y2,x3,y3) {
	var x12 = x2 - x1;
	var y12 = y2 - y1;
	var x13 = x3 - x1;
	var y13 = y3 - y1;
	var sk1213 = x12*x13+y12*y13;
	return sk1213;
}
function X4(x1,y1,x2,y2,x3,y3) {
	if (Math.abs(skal(x1,y1,x2,y2,x3,y3)) < 0.0001)
		return (x3 + (x2-x1));

	if (Math.abs(skal(x2,y2,x1,y1,x3,y3)) < 0.0001)
		return (x3 + (x1-x2));

	if (Math.abs(skal(x3,y2,x1,y1,x2,y2)) < 0.0001)
		return (x3 + (x1-x3));
}

function Y4(x1,y1,x2,y2,x3,y3) {
	if (Math.abs(skal(x1,y1,x2,y2,x3,y3)) < 0.0001)
		return (y3 + (y2-y1));

	if (Math.abs(skal(x2,y2,x1,y1,x3,y3)) < 0.0001)
		return (y3 + (y1-y2));

	if (Math.abs(skal(x3,y2,x1,y1,x2,y2)) < 0.0001)
		return (y3 + (y1-y3));
}