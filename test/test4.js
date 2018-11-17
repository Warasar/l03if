"use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 15', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L03-15.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L03-15.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const Inside = require('../L03-15.js');
	var y;

	it('верно определяет принадлежность при x1=0 y1=0 x2=2 y2=3 x3=4 y3=0 x=1 y=1', function(){
		y = Inside(0,0,2,3,4,0,1,1);
		assert(y=="true", "ошибка при x1=0 y1=0 x2=2 y2=3 x3=4 y3=0 x=1 y=1");
	});

	it('верно определяет, что точка не пренадлежит при x1=0 y1=0 x2=2 y2=3 x3=4 y3=0 x=10 y=10', function(){
	y = Inside(0,0,2,3,4,0,10,10);
		assert(y=="false", "ошибка при x1=0 y1=0 x2=2 y2=3 x3=4 y3=0 x=10 y=10");
	});

	it('верно определяет принадлежность при x1=0 y1=0 x2=-2 y2=-3 x3=-4 y3=0 x=-2 y=-1', function(){
		y = Inside(0,0,-2,-3,-4,0,-2,-1);
		assert(y=="true", "ошибка при x1=0 y1=0 x2=2 y2=3 x3=4 y3=0 x=1 y=1");
	});

	it('верно определяет, что точка не пренадлежит при x1=0 y1=0 x2=-2 y2=-3 x3=-4 y3=0 x=-20 y=-1', function(){
		y = Inside(0,0,-2,-3,-4,0,-20,-1);
		assert(y=="false", "ошибка при x1=0 y1=0 x2=2 y2=3 x3=4 y3=0 x=1 y=1");
	});

}); 