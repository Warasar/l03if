// 12.	(Использовать switch/case. Массивы, операторы if не использовать)
// 		Введите с клавиатуры число n и выведите английское название соответствующей цифры
// 		от 0 до 9 заглавными буквами, (ZERO, ONE, ...), либо ERROR, если число меньше 0 или больше 9.
function digit(n) {
switch(n) {
	case 0:
		return 'ZERO';
		break;
	case 1:
		return 'ONE';
		break;
	case 2:
		return 'TWO';
		break;
	case 3:
		return 'THREE';
		break;
	case 4:
		return 'FOUR';
		break;
	case 5:
		return 'FIVE';
		break;
	case 6:
		return 'SIX';
		break;
	case 7:
		return 'SEVEN';
		break;
	case 8:
		return 'EIGHT';
		break;
	case 9:
		return 'NINE';
		break;
	default:
		return 'ERROR';
	}
}