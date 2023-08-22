// https://javascript.tutorials24x7.com/blog/how-to-draw-animated-circles-in-html5-canvas

const PI = Math.PI;
const cnvs = document.getElementById("cnvs");
const ctx = cnvs.getContext("2d");
cnvs.width = 1000;
cnvs.height = 600;

let radius = 25;
let x = radius + Math.random() * ( cnvs.width - radius * 2 );
let y = radius + Math.random() * ( cnvs.height - radius * 2 );
let dx = 4;
let dy = 4;

function animate () {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, cnvs.width, cnvs.height)

    if (x + radius > cnvs.width || x - radius < 0) dx = -dx;
    if (y + radius > cnvs.height || y - radius < 0) dy = -dy;

    x += dx;
    y += dy;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * PI);
    ctx.fill();
}

animate();

// function animate () {
//     var top = parseInt(rect.style.top), left = parseInt(rect.style.left)
//     rect.style.top = `${top + 1}px`;
//     rect.style.left = `${left + 1}px`;
//     requestAnimationFrame(animate);
// }

// var rect = document.createElement("div");
// rect.style.width = 50 + "px";
// rect.style.height = 50 + "px";
// rect.style.background = "red";
// rect.style.position = "fixed";
// rect.style.top = `${cnvs.height + 15}px`;
// rect.style.left = `${document.body.getBoundingClientRect().left}px`;
// document.body.appendChild(rect);

// console.log()

// animate();