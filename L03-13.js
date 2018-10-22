function S(x1,y1,x2,y2,x3,y3)
{
	var a,b,c,d,e,g,h;
	a=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
	b=Math.sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1));
	c=Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
	if (a==0)
	{
		if (b==0)
		{
			if (c==0)
			{
				res="false";
			}
		}
	}
	if ((a>c)&&(b==c))
	{
		if (a==Math.sqrt((b*b)+(c*c)))
		{
			res="true";
		} 
		else 
			{ 
				res="false";
			}
	}
	else
		if ((c>a)&&(a==b))
		{
			if (c==Math.sqrt((a*a)+(b*b)))
			{
				res="true";
			}
			else
			{
				res="false";
			}
		}
		else
			if ((b>a)&&(a==c))
			{
				if (b==Math.sqrt((a*a)+(c*c)))
				{
					res="true";
				}
				else 
					{
						res="false";
					}
			}
	return res;
}