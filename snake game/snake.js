//classes
class Snake {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{ x: this.x, y: this.y }]
        this.rotateX = 0
        this.rotateY = 1

    }

    move() {
        var newReact;;
        if (this.rotateX == 1) {
            newReact = {
                x: this.tail[this.tail.length - 1].x + this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateX == -1) {
            newReact = {
                x: this.tail[this.tail.length - 1].x - this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateY == 1) {
            newReact = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y + this.size,
            }
        } else if (this.rotateY == -1) {
            newReact = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y - this.size,
            }
        }

        this.tail.shift()
        this.tail.push(newReact)

    }
}


class Aplle {
    constructor() {
        var isTouching;
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            for (var i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true
                }
            }
            if (!isTouching) {
                break;
            }
            this.color = "pink"
            this.size = snake.size
        }
    }
}
//classes fim.


// variantes
var canvas = document.gertElementById("canvas ")


var snake = new Snake();


var apple = new Aplle();


var canvasContext = canvas.getContext('2d');

//fim variantes

window.onload = () => {
    gameLoop();
}


//funções
function gameLoop() {
    setInterval(show, 1000 / 15) // here  15 is uor fps value
}



function show() {
    update();
    draw();
}



function update() {
    snake.move()

}



function draw() {
    createReact(0, 0, canvas.width, canvas.height, "black")
    createReact(0, 0, canvas.width, canvas.height)
    for (var i = 0; i < snake.tail.length; i++) {
        createReact(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5,
            snake.size - 5, snake.size - 5, 'white')
    }
    canvasContext.font = "20px Arial"
    canvasContext.fillStyle = "#00FF42"
    canvasContext.fillText = "Score: ", (snake.tail.length + 1),
        canvas.width - 120, 18;
    createReact(apple.x, apple.y, apple.size, apple.size, apple.color)

}



function createReact(x, y, width, height, color) {
    canvasContext.fillStyle = color
    canvasContext.fillReact(x, y, width, height)
}

//fim funções

window.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.keyCode == 37 && snake.rotateX != 1) {
            snake.rotateX = -1
            snake.rotateY = 0;
        } else if (event.keyCode == 38 && snake.rotateY != 1) {
            snake.rotateX = 0
            snake.rotateY = -1;
        } else if (event.keyCode == 39 && snake.rotateX != -1) {
            snake.rotateX = 1
            snake.rotateY = 0;
        } else if (event.keyCode == 40 && snake.rotateY != -1) {
            snake.rotateX = 0
            snake.rotateY = 1;
        }
    }, 1)
})