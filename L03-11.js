function WeekdayName(n) {
	wdn = "";
	switch(n) {
		case 1: wdn = "понедельник"; break;
		case 2: wdn = "вторник"; break; 
		case 3: wdn = "среда"; break; 
		case 4: wdn = "четверг"; break; 
		case 5: wdn = "пятница"; break; 
		case 6: wdn = "суббота"; break; 
		case 7: wdn = "воскресенье";  
	}
	if (n < 8 && n > 0) return wdn;
	else return wdn = "";
}

module.exports = WeekdayName;