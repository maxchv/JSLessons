QUnit.test( "Задание 1. Клонирование простого массива", function( assert ) {
	var arr = [1, 2, 4, 0];
	var cpy = array_clone(arr);
	arr[0] = 100;
	arr[1] = 200;
	assert.deepEqual(cpy, [1,2,4,0] , "Failed!" );	
});

QUnit.test( "Задание 1. Клонирование вложенного массива", function( assert ) {
	var arr = [1, 2, [4, 0]];
	var cpy = array_Clone(arr);
	arr[2][0] = 100;
	arr[2][1] = 200;
	assert.deepEqual(cpy, [1, 2, [4, 0]] , "Failed!" );	
});

QUnit.test( "Задание 2. Сумма квадратов чисел", function( assert ) {	
	assert.deepEqual(summ_kv([1,2,3,4]), 30 , "Failed!" );	
});

QUnit.test( "Задание 3. Перемешивание массива", function( assert ) {	
	assert.notDeepEqual(array_shuffle([1,2,3,4]), [1,2,3,4] , "Failed!" );	
});

QUnit.test( "Задание 4. Уникальные элементы массива", function( assert ) {	
	assert.deepEqual(unique([7, 9, 0, -2]), [7, 9, 0, -2] , "Failed!" );	
	assert.deepEqual(unique([7, 7, 0, -2]), [9, 0, -2] , "Failed!" );	
	assert.deepEqual(unique([7, 9, 9, -2]), [7, -2] , "Failed!" );	
	assert.deepEqual(unique([1, 1, 1, 1]), [] , "Failed!" );	
});