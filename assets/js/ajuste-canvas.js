const ajuste_canvas = document.getElementById('ajuste-canvas');
const ctx = ajuste_canvas.getContext('2d');

// draw a rectangle that contains a grid, with a point in its center
function drawVector(x, y) {
    // Clear the canvas (optional, for redrawing)
    ctx.clearRect(0, 0, ajuste_canvas.width, ajuste_canvas.height);

    // Draw the vector from (0, 0) to (x, y)
    ctx.beginPath();
    ctx.moveTo(0, 0);  // Starting point of the vector (origin)
    ctx.lineTo(x, y);   // Ending point of the vector (x, y)
    ctx.strokeStyle = 'blue';  // Vector color
    ctx.lineWidth = 2;  // Vector line width
    ctx.stroke();
}

function drawGrid(cellSize = 50, gridColor = "#ddd", axisColor="#000") {
    const width = ajuste_canvas.width;
    const height = ajuste_canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y < height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    // draw a point at the center of the canvas
    ctx.fillStyle = axisColor;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 3, 0, 1 * Math.PI);
    ctx.fill();

}

// Call the function to draw a vector (example: vector (100, 150))
// drawVector(100, 150);
drawGrid(cellSize=38);