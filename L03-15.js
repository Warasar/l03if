function Inside(x1,y1,x2,y2,x3,y3,x,y) {
	var Sabc = 1/2 * Math.abs((x1-x3)*(y2-y3)-(y1-y3)*(x2-x3));
	var Sadc = 1/2 * Math.abs((x-x1)*(y3-y1)-(y-y1)*(x3-x1));
	var Sadb = 1/2 * Math.abs((x2-x1)*(y-y3)-(y2-y1)*(x-x1));
	var Sbdc = 1/2 * Math.abs((x2-x)*(y3-y)-(y2-y)*(x3-x));
	var S3 = Sadc + Sadb + Sbdc;
	if (Sabc == S3) return "true";
	else return "false";
}

module.exports = Inside;


