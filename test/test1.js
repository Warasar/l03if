"use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 1', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L03-01.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L03-01.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const f = require('../L03-01.js');
	var y;

	it('верно при x=1 y=0 z=1', function(){
		y = f(-1,0,1);
		assert(y==1, "ошибка при x=1 y=0 z=1");
	});

	it('верно при x=1 y=2 z=3', function(){
	y = f(1,2,3);
		assert(y==5, "ошибка при x=1 y=0 z=1");
	});

	it('верно при x=0 y=0 z=0', function(){
	y = f(0,0,0);
		assert(y==0, "ошибка при x=1 y=0 z=1");
	});


}); 