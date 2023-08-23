// https://javascript.tutorials24x7.com/blog/how-to-draw-animated-circles-in-html5-canvas

const PI = Math.PI;
const cnvs = document.getElementById("cnvs");
const ctx = cnvs.getContext("2d");
cnvs.width = 1000;
cnvs.height = 600;

let radius = 10;
let x1 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x2 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x3 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x4 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x5 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x6 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x7 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x8 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x9 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let x0 = (cnvs.width / 2) * (Math.random() * 2) + radius;
let y = radius;

let dx1 = (cnvs.width / 2 - x1) / 600
let dx2 = (cnvs.width / 2 - x2) / 600
let dx3 = (cnvs.width / 2 - x3) / 600
let dx4 = (cnvs.width / 2 - x4) / 600
let dx5 = (cnvs.width / 2 - x5) / 600
let dx6 = (cnvs.width / 2 - x6) / 600
let dx7 = (cnvs.width / 2 - x7) / 600
let dx8 = (cnvs.width / 2 - x8) / 600
let dx9 = (cnvs.width / 2 - x9) / 600
let dx0 = (cnvs.width / 2 - x0) / 600
console.log()
let dy = 1;

function animate () {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, cnvs.width, cnvs.height)

    if (y + radius > cnvs.height || y - radius < 0) return;

    x1 += dx1;
    x2 += dx2;
    x3 += dx3;
    x4 += dx4;
    x5 += dx5;
    x6 += dx6;
    x7 += dx7;
    x8 += dx8;
    x9 += dx9;
    x0 += dx0;
    y += dy;

    ctx.beginPath();
    ctx.arc(x1, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x2, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x3, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x4, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x5, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x6, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x7, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x8, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x9, y, radius, 0, 2 * PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x0, y, radius, 0, 2 * PI);
    ctx.stroke();
}

animate();
console.log(y)

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