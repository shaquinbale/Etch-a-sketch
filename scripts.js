let canvasSize = 10;



function generateCanvas(canvasSize) {
    let canvas = document.querySelector("#canvas")



    for (let boxes = 0; boxes < canvasSize ** 2; boxes++) {
        let pixel = document.createElement("div");
        pixel.style.width = `${500 / canvasSize}px`;
        pixel.style.height = `${500 / canvasSize}px`;
        pixel.style.backgroundColor = 'White';
        canvas.appendChild(pixel);
    }
}

generateCanvas(canvasSize);