function WeekdayName(n) {
	var week;
    var n;
switch (n) {
		case 1:
		    week = 'понедельник';
		 break;

		case 2:
		    week = 'вторник';
	     break;

		case 3:
		    week = 'среда';
		 break;

		case 4:
		    week = 'четверг';
		 break;

		case 5:
		    week = 'пятница';
		 break;

		case 6:
		    week = 'суббота';
		 break;

		case 7:
		    week = 'воскресенье';
		 break;
			
		default:
		 week = '';
	}
return week;
}