function S(x1,y1,x2,y2,x3,y3){
 if(x1==x2 && x2==x3 && x1==x3 && y1==y2 && y1==y3 && y2==y3){
return -1 ;
}
 else{
    var a,b,c;
    var p;
    var S;
	var ax,ay,bx,by,cx,cy ;
		             ax = (x1-x2) ;
		             ay = (y1-y2) ;
		             bx = (x3-x2) ;
		             by = (y3-y2) ;
		             cx = (x1-x3) ;
		             cy = (y1-y3) ;
		             a = Math.sqrt(ax*ax+ay*ay) ;
		             b = Math.sqrt(bx*bx+by*by) ;
		             c = Math.sqrt(cx*cx+cy*cy) ;
		             p = (a+b+c)/2 ;
		             S = Math.sqrt(p*(p-a)*(p-b)*(p-c)) ;
		             return S ;
}
}
