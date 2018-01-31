QUnit.test( "Задание 1. Написать функцию isPalindrom(str)", function( assert ) {
	assert.equal(isPalindrom('madam'), true , "Это должен быть палиндром!" );
	assert.equal(isPalindrom('mama'), false , "Это не палиндром!" );
});

QUnit.test( "Задание 2. Напишите функцию ucFirst(str)", function( assert ) {
	assert.equal(ucFirst('anna'), 'Anna' , "Failed!" );
	assert.equal(ucFirst('java'), 'Java' , "Failed!" );
	assert.equal(ucFirst('hello world'), 'Hello World'  , "Failed!" );
});

QUnit.test( "Задание 3. Напишите функцию checkSpam(str)", function( assert ) {
	assert.equal(checkSpam('buy ViAgRA now'), true , "Это спам!" );
	assert.equal(checkSpam('free xxxxx'), true , "Это спам!" );
	assert.equal(checkSpam("innocent rabbit"), false, "Это не спам!" );
});

QUnit.test( "Задание 4.  Создайте функцию extractCurrencyValue(str)", function( assert ) {
	assert.deepEqual(extractCurrencyValue('$120'), 120, "Это не число!" );
});

QUnit.test( "Задание 5. Напишите функцию toAlphaBet(str)", function( assert ) {
	assert.equal(toAlphaBet('webmaster'), 'abeemrstw' , "Это не алфавитный порядок!" );

});