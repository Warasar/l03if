function f(x,y,z){
	var min;
	if (x+y+z > x*y*z && x+y+z > x*y+z){
		min = x + y + z;
	}else
	if (x*y*z > x*y*z && x*y*z > x*y+z){
		min = x*y*z;
	}else{
	    min = x*y+z;
	}
	return min;
}