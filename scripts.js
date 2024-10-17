let canvasSize = 16;

let canvas = document.querySelector("#canvas")
function generateCanvas(canvasSize) {
    for (let boxes = 0; boxes < canvasSize ** 2; boxes++) {
        const pixel = document.createElement("div");
        pixel.style.width = `${500 / canvasSize}px`;
        pixel.style.height = `${500 / canvasSize}px`;
        pixel.style.backgroundColor = 'White';
        pixel.setAttribute('id', `${boxes}`)
        canvas.appendChild(pixel);
    }
}

canvas.addEventListener('mouseover', (event) => {
    const pixel = document.getElementById(event.target.id);
    pixel.style.backgroundColor = 'black';
})

const clear = document.querySelector("#clear");
clear.addEventListener('click', (event) => {
    canvas.innerHTML = '';
    generateCanvas(canvasSize);
})

const generate = document.querySelector('#generate');
generate.addEventListener('click', (event) => {
    canvasSize = parseInt(prompt('Please input your desired grid size (up to 100)', '16'));

    if (canvasSize > 100) {
        canvasSize = 100;
    }

    if (canvasSize < 1) {
        canvasSize = 1;
    }

    canvas.innerHTML = '';
    generateCanvas(canvasSize);
})

 generateCanvas(canvasSize);