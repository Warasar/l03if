function WeekdayName(n) {
	wdn = "";
	switch(n) {
		case 1: wdn = "Понедельник"; break;
		case 2: wdn = "Вторник"; break; 
		case 3: wdn = "Среда"; break; 
		case 4: wdn = "Четверг"; break; 
		case 5: wdn = "Пятница"; break; 
		case 6: wdn = "Суббота"; break; 
		case 7: wdn = "Воскресенье";  
	}
	if (n < 8 && n > 0) return wdn;
	else return wdn = "";
}