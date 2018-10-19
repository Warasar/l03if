function f(a,b,c,d)
	{
		var max1,max2,min;
		if (a>b) {
			max1=a
		}
			else {
			max1=b
		}
		if (c>d) {
			max2=c
		}
			else {
			max2=d
		}
		if (max1>max2) {
			min=max2
		}
			else {
				min=max1
			}return min;
	}