function digit(n)
{
	var res;
	switch(n)
	{
		case 0:
				res="ZERO";
				break;
		case 1:
				res="ONE";
				break;
		case 2:
				res="TWO";
				break;
		case 3:
				res="THREE";
				break;
		case 4:
				res="FOUR";
				break;
		case 5:
				res="FIVE";
				break;
		case 6:
				res="SIX";
				break;
		case 7:
				res="SEVEN";
				break;
		case 8:
				res="EIGHT";
				break;
		case 9:
				res="NINE";
				break;
		default:
				res="ERROR";
	}
		return(res);
}