QUnit.module( "Задание 1" );
QUnit.test("Валидация даты функцией. Функция is_date(str)", function (assert) {
    assert.ok(is_date("24.09.2016"), "Должна возвращать true!");
    assert.ok(is_date("24-09-2016"), "Должна возвращать  true!");
    assert.ok(is_date("24/09/2016"), "Должна возвращать  true!");
    assert.notOk(is_date("24=09=2016"), "Должна возвращать  false!");
    assert.notOk(is_date("dd/mm/yyyy"), "Должна возвращать  false!");

    /* Дополнительное задание на повышенную оценку */
    assert.notOk(is_date("28.08/2017"), "Дополнительное задание!");
    assert.notOk(is_date("28-08.2017"), "Дополнительное задание!");
});

QUnit.module( "Задание 2" );
QUnit.test("Валидация номера телефона. Функция is_phone(str)", function (assert) {
    assert.ok(is_phone("123-45-67"), "Должно быть true!");
    assert.ok(is_phone("(045) 123-34-45"), "Должно быть true!");
    assert.ok(is_phone("+38 (023) 121-23-12"), "Должно быть true!");

    assert.notOk(is_phone("24=09=2016"), "Должно быть false!");
    assert.notOk(is_phone("dd/mm/yyyy"), "Должно быть false!");
    assert.notOk(is_phone("1234567"), "Должно быть false!");
});

QUnit.module( "Задание 3" );
QUnit.test("Функция is_dummy_match ", function (assert) {
    assert.ok(is_dummy_match("pit"), "Должно быть true!");
    assert.ok(is_dummy_match("spot"), "Должно быть true!");
    assert.ok(is_dummy_match("slap two"), "Должно быть true!");
    assert.ok(is_dummy_match("respite"), "Должно быть true!");

    assert.notOk(is_dummy_match(""), "Должно быть false!");
    assert.notOk(is_dummy_match("pt"), "Должно быть false!");
    assert.notOk(is_dummy_match("Pot"), "Должно быть false!");
    assert.notOk(is_dummy_match("peat"), "Должно быть false!");
    assert.notOk(is_dummy_match("part"), "Должно быть false!");
});

QUnit.module( "Задание 4" );
QUnit.test("Парсер html", function (assert) {
    assert.deepEqual(parse_tag("<title>Заголовок</title>"), ['title', 'Заголовок'], "Неверно распарсен парный тег title");
    assert.deepEqual(parse_tag("<p>Параграф</p>"), ['p', 'Параграф'], "Неверно распарсен парный тег p");
    assert.deepEqual(parse_tag("<h1>Заголовок первого уровня</h1>"), ['h1', 'Заголовок первого уровня'], "Неверно распарсен парный тег h1");
    assert.deepEqual(parse_tag("<a href='url' />"), ['a'], "Неверно распарсен одиночный тег a");
    assert.deepEqual(parse_tag("only text"), [], "Неверно распарсена простая строка");
});
