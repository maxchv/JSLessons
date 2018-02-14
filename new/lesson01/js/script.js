        // однострочный
        /*
            многосточный
        */

        var a;
        a = 10;
        console.log(typeof a);
        a = '10';
        console.log(typeof (a));
        a = 10 > 0;
        console.log(typeof (a));
        a = {};
        console.log(typeof (a));
        a = new Array();
        console.log(typeof (a));
        a = function () {};
        console.log(typeof (a));
        a = new RegExp(); // RegExp
        console.log(typeof (a));

        a = 2 + 2;
        console.log(a);
        // неявные преобразования
        a = '2' + '2';
        console.log(a);
        a = 2 + '2';
        console.log(a);
        a = 2 + (+'2');
        console.log(a);
        a = '2' - 'a';
        console.log(a);
        console.log(isNaN(a));
        a = 1 / 0;
        console.log(a);
        console.log(isFinite(a));
        console.log(isNaN(false));
        a = null + true;
        console.log(a);
        console.log(isNaN(undefined));

        console.log(Boolean(1));
        console.log(Boolean(0));
        console.log(Boolean([]));
        console.log(Boolean(null));
        console.log(Boolean(undefined));
        console.log(Boolean(NaN));
        console.log(Boolean(Infinity));

        console.log(2 == 2);
        console.log(2 == '2');

        console.log("===");
        console.log(2 === 2);
        console.log(2 === '2');

        console.log("!==");
        console.log(2 !== 2);
        console.log(2 !== '2');

        a = '0xf';
        console.log(Number(a));
        a = '125.5';
        console.log(Number(a));
        a = parseInt(a);
        console.log(a);
        a = parseFloat('123.14f');
        console.log(a);

        if (true) {
            console.log("it is true ");
        }
        a = '';
        for (var i = 0; i < 10; i++) {
            a += i + ', ';
        }
        console.log(a);

        // модальные диалоговые окна
        // alert("Привет JS");
        /*
        var res = confirm("Сейчас идет снег?");
        console.log(res);
        console.log(typeof(res));
        */

        var res = prompt("Сколько тебе лет?", 0);
        console.log(res);

        document.write("<h1>Тебе " + res + " лет </h1>");
