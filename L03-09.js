function S(x1,y1,x2,y2,x3,y3) {
	var p = 0;
	var S = 0;
	var ABx = x2 - x1;
	var ABy = y2 - y1;
	var ACx = x3 - x1;
	var ACy = y3 - y1;
	var BCx = x3 - x2;
	var BCy = y3 - y2;
	var BAx = x1 - x2;
	var BAy = y1 - y2;
	var CAx = x1 - x3;
	var CAy = y1 - y3;
	var CBx = x2 - x3; 
	var CBy = y2 - y3;
	var CosABAC = (ABx * ACx + ABy * ACy)/((Math.sqrt(ABx*ABx + ABy*ABy)) * (Math.sqrt(ACx*ACx + ACy*ACy)));
	var CosBCBA = (BCx * BAx + BCy * BAy)/((Math.sqrt(BCx*BCx + BCy*BCy)) * (Math.sqrt(BAx*BAx + BAy*BAy))); 
	var CosCACB = (CAx * CBx + CAy * CBy)/((Math.sqrt(CAx*CAx + CAy*CAy)) * (Math.sqrt(CBx*CBx + CBy*CBy))); 
	if (CosABAC < 0 && CosABAC > -1) {
		S = 1/2 * ((x1-x3)*(y2-y3)-(y1-y3)*(x2-x3));
		return S;
	} else if (CosBCBA < 0 && CosBCBA > -1) {
		S = 1/2 * ((x1-x3)*(y2-y3)-(y1-y3)*(x2-x3));
		return S;
	} else if (CosCACB < 0 && CosCACB > -1) {
		S = 1/2 * ((x1-x3)*(y2-y3)-(y1-y3)*(x2-x3));
		return S;
	} else return S = -1;

	/*if (CosABAC < 0 && CosABAC > -1) {
		p = (Math.sqrt(ABx*ABx + ABy*ABy)+Math.sqrt(ACx*ACx + ACy*ACy)+Math.sqrt(BCx*BCx + BCy*BCy))/2;
		S = Math.sqrt(p*(p-Math.sqrt(ABx*ABx + ABy*ABy))*(p-Math.sqrt(ACx*ACx + ACy*ACy))*(p-Math.sqrt(BCx*BCx + BCy*BCy)));
		return S;
	} else if (CosBCBA < 0 && CosBCBA > -1) {
		p = (Math.sqrt(ABx*ABx + ABy*ABy)+Math.sqrt(ACx*ACx + ACy*ACy)+Math.sqrt(BCx*BCx + BCy*BCy))/2;
		S = Math.sqrt(p*(p-Math.sqrt(ABx*ABx + ABy*ABy))*(p-Math.sqrt(ACx*ACx + ACy*ACy))*(p-Math.sqrt(BCx*BCx + BCy*BCy)));
		return S;
	} else if (CosCACB < 0 && CosCACB > -1) {
		p = (Math.sqrt(ABx*ABx + ABy*ABy)+Math.sqrt(ACx*ACx + ACy*ACy)+Math.sqrt(BCx*BCx + BCy*BCy))/2;
		S = Math.sqrt(p*(p-Math.sqrt(ABx*ABx + ABy*ABy))*(p-Math.sqrt(ACx*ACx + ACy*ACy))*(p-Math.sqrt(BCx*BCx + BCy*BCy)));
		return S;
	} else return S = -1;*/
	//решение с помощью формулы герона
}

module.exports = S;