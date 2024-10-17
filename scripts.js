let canvasSize = 10;
let canvas = document.querySelector("#canvas")

function generateCanvas(canvasSize) {
    for (let boxes = 0; boxes < canvasSize ** 2; boxes++) {
        let pixel = document.createElement("div");
        pixel.style.width = `${500 / canvasSize}px`;
        pixel.style.height = `${500 / canvasSize}px`;
        pixel.style.backgroundColor = 'White';
        pixel.setAttribute('id', `${boxes}`)
        canvas.appendChild(pixel);
    }
}

canvas.addEventListener('click', (event) => {
    const pixel = document.getElementById(event.target.id);
    pixel.style.backgroundColor = 'black';
})

generateCanvas(canvasSize);