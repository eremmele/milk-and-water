var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var balls = [];
var numBalls = 8;
var easing = 0.25;

var mouse = { x: canvas.width / 2, y: canvas.height / 2 };
canvas.addEventListener('mousemove', function (evt) {
    mouse.x = evt.pageX - this.offsetLeft;
    mouse.y = evt.pageY - this.offsetTop;
});

function Ball() {
    this.x = 0;
    this.y = 0;
    this.radius = 80;
    this.color = 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';
}

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
};

while (numBalls--) {
    balls.push(new Ball());
}

function move(ball, i) {
    if (i === 0) {
        var vx = (mouse.x - ball.x) * easing;
        var vy = (mouse.y - ball.y) * easing;
    }
    else {
        var ballA = balls[i - 1];
        var vx = (ballA.x - ball.x) * easing;
        var vy = (ballA.y - ball.y) * easing;
    }
    ball.x += vx;
    ball.y += vy;
}

(function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(function (ball, i) {
        move(ball, i);
        ball.draw();
    })
}());