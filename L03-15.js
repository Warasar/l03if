function inside(x1,y1,x2,y2,x3,y3,x,y){
	var a,b,c ;
	a = (x1-x)*(y2-y1)-(x2-x1)*(y1-y) ;
	b = (x2-x)*(y3-y2)-(x3-x2)*(y2-y) ;
	c = (x3-x)*(y1-y3)-(x1-x3)*(y3-y) ;
	if ((a >= 0.0001 && b >= 0.0001 && c>= 0.0001) || (a <= 0.0001 && b <= 0.0001 && c <= 0.0001))
		return true ;
	else
		return false ;
}