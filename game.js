
const canvas = document.getElementById('canvas');
let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;

// CANVAS SIZE
window.addEventListener('resize', resize);
resize();
function resize()
{
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
}

let currentLevelIndex = 0;

function update()
{
    const ctx = canvas.getContext('2d');
    const level = levels[currentLevelIndex];
    level.draw(ctx, canvasWidth, canvasHeight);
}

setInterval(update, 100); // give images etc. time to load

