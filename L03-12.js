function digit(n) {
	var chislo
	switch (n) {
	case 0: chislo = "ZERO";
			break;
	case 1: chislo = "ONE";
			break;
	case 2: chislo = "TWO";
			break;
	case 3: chislo = "THREE";
			break;
	case 4: chislo = "FOUR";
			break;	
	case 5: chislo = "FIVE";
			break;
	case 6: chislo = "SIX";
			break;
	case 7: chislo = "SEVEN";
			break;
	case 8: chislo = "EIGHT";
			break;
	case 9: chislo = "NINE";
			break;
	default : chislo = "ERROR"
	}
	return (chislo);
}