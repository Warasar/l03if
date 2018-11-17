"use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 11', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L03-11.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L03-11.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const WeekdayName = require('../L03-11.js');

	it('верно при n=1', function(){
		assert.strictEqual(WeekdayName(1).trimRight(), "понедельник", "ошибка при n=1");
	});

	it('верно при n=2', function(){
		assert.strictEqual(WeekdayName(2).trimRight(), "вторник", "ошибка при n=2");
	});

	it('верно при n=3', function(){
		assert.strictEqual(WeekdayName(3).trimRight(), "среда", "ошибка при n=3");
	});

	it('верно при n=4', function(){
		assert.strictEqual(WeekdayName(4).trimRight(), "четверг", "ошибка при n=4");
	});

	it('верно при n=5', function(){
		assert.strictEqual(WeekdayName(5).trimRight(), "пятница", "ошибка при n=5");
	});

	it('верно при n=6', function(){
		assert.strictEqual(WeekdayName(6).trimRight(), "суббота", "ошибка при n=6");
	});

	it('верно при n=7', function(){
		assert.strictEqual(WeekdayName(7).trimRight(), "воскресенье", "ошибка при n=7");
	});

	it('верно при n=0', function(){
		assert.strictEqual(WeekdayName(0).trimRight(), "", "ошибка при n=8");
	});

	it('верно при n=19', function(){
		var n=19
		assert.strictEqual(WeekdayName(n).trimRight(), "", "ошибка при n=8");
	});

	it('верно при n=-5', function(){
		var n=-5
		assert.strictEqual(WeekdayName(n).trimRight(), "", "ошибка при n=8");
	});

}); 