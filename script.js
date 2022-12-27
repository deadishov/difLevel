const square = document.createElement('div');
square.style.width = 200 + 'px';
square.style.height = 200 + 'px';
square.style.background = 'blue';
square.style.position = 'absolute';
document.body.append(square);

const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')



let count = 0;
let animation

const squareGo = () => {
    count++
    animation = requestAnimationFrame(squareGo)


    if (count < 600) {
        square.style.left = count + 'px';
    } else {
        cancelAnimationFrame(animation);
    }
}

start.addEventListener('click', () => {
    squareGo()
    start.style.display = 'none'
    pause.style.display = 'block'
})
pause.addEventListener('click', () => {
    cancelAnimationFrame(animation)
    pause.style.display = 'none'
    start.style.display = 'block'
})
reset.addEventListener('click', () => {
    square.style.left = 8 + 'px'
    count = 0
})