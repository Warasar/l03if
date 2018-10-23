function h(a,b,c)
{
	var s,p,res;
	if (a+b>=c)
	{
		if (a+c>=b)
		{
			if (c+b>=a)
			{
				s=(a+b+c)/2;
				res=(2*s)/a;
			}
			else res=-1;
		}
		else res=-1;
	}
	else res=-1;
	return(res);
}

