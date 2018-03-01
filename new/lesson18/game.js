function foo() {
    let canvas = document.querySelector("canvas");
    let width = 400;
    let height = 300;

    canvas.widht = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.border = "1px solid black";

    let ctx = canvas.getContext("2d");

    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.fillStyle = "blue";

    ctx.save();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.fillStyle = "gray";
    ctx.scale(1.5, 1.5);
    // начало отрисовки сложной фигуры
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.lineTo(width / 2 + 50, height / 2 - 50);
    ctx.lineTo(width / 2 + 50, height / 2);
    // конец отрисовки сложной фигуры
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    function toRadian(deg) {
        return (Math.PI / 180) * deg;
    }
    ctx.restore();
    ctx.beginPath();
    ctx.arc(100, 100, 10, toRadian(0), toRadian(360));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillText("(100, 100)", 100, 100);

    ctx.fillRect(200, 200, 100, 100);
    ctx.strokeRect(200, 200, 100, 100);
}

function Shape(x, y) {
    this.x = x;
    this.y = y;
    this.fillColor = "black";
    this.strokeColor = "orange";
}

function Ball(x, y, r) {
    //Shape.apply(this, arguments);        
    Shape.call(this, x, y);
    this.radius = r;
    this.velocity = {x: 1, y: -1}; // вектор скорости 
    this.right = 400;
    this.bottom = 300;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.construct = Ball;

Ball.prototype.draw = function (ctx) {
    ctx.save();
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;

    ctx.beginPath();

    // перемещаем мяч в новое место
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    
//    // столкновение с нижней границей 
//    if(this.y + this.radius >= this.bottom) {
//        this.velocity.y *= -1;
//    }
    // столкновение с верхней границей 
    if(this.y - this.radius <= 0) {
        this.velocity.y *= -1;
    }
    // столкновение с правой границе
    if(this.x + this.radius >= this.right) {
        this.velocity.x *= -1;
    }
    // столкновение в левой границей
    if(this.x - this.radius <= 0) {
        this.velocity.x *= -1;
    }
    
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

const game = {    
    width: 400,
    height: 300,
    init: function (canvas) {
        this.ctx = canvas.getContext("2d");
        this.ball = new Ball(this.width / 2, this.height / 2, 20);
    },
    draw: function () {        
        let ctx = this.ctx;
        let ball= this.ball;
        let width = this.width;
        let heigth = this.heigth;
        function _draw() {
            console.log("draw");
            // сохраняем состояние контекста
            ctx.save();
            // очищаем экран
            ctx.clearRect(0, 0, 400, 300);

            // отрисовываем объекты

            // 0. отрисовать фон

            // 1. отрисовать блоки

            // 2. отрисовать ракетку

            // 3. отрисовать мячик
            ball.draw(ctx);

            // восстановление состояния
            ctx.restore();
            // анимация
            requestAnimationFrame(_draw);
        }
        requestAnimationFrame(_draw);
    }
}
game.init(document.querySelector("canvas"));
game.draw();
