"use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 9', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L03-09.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L03-09.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const S = require('../L03-09.js');

	it('верно при 0,2,2,0,5,0', function(){
		assert.strictEqual(S(0,2,2,0,5,0), 3, "ошибка при 0,2,2,0,5,0");
	});

	it('верно при 0,2,0,0,0,5, т.е. точки образуют прямую', function(){
		assert.strictEqual(S(0,2,0,0,0,5), -1, "ошибка при 0,2,2,0,5,0");
	});

	it('верно при 0,-2,-2,0,0,-5', function(){
		assert.strictEqual(S(0,-2,-2,0,0,-5), 3, "ошибка при 0,2,2,0,5,0");
	});

	it('верно при 0,0,0,0.01,0,5', function(){
		assert.strictEqual(S(0,0,0,0.01,0,5), -1, "ошибка при 0,2,2,0,5,0");
	});
	
}); 