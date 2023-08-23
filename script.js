// https://javascript.tutorials24x7.com/blog/how-to-draw-animated-circles-in-html5-canvas

const PI = Math.PI;
const cnvs = document.getElementById("cnvs");
const ctx = cnvs.getContext("2d");
cnvs.width = 1000;
cnvs.height = 600;

let radius = 10;
let x1w = (cnvs.width / 2) * (Math.random() * 2);
let x1 = x1w < 500 ? x1w + radius : x1w;
let x2w = (cnvs.width / 2) * (Math.random() * 2);
let x2 = x2w < 500 ? x2w + radius : x2w;
let x3w = (cnvs.width / 2) * (Math.random() * 2);
let x3 = x3w < 500 ? x3w + radius : x3w;
let x4w = (cnvs.width / 2) * (Math.random() * 2);
let x4 = x4w < 500 ? x4w + radius : x4w;
let x5w = (cnvs.width / 2) * (Math.random() * 2);
let x5 = x5w < 500 ? x5w + radius : x5w;
let x6w = (cnvs.width / 2) * (Math.random() * 2);
let x6 = x6w < 500 ? x6w + radius : x6w;
let x7w = (cnvs.width / 2) * (Math.random() * 2);
let x7 = x7w < 500 ? x7w + radius : x7w;
let x8w = (cnvs.width / 2) * (Math.random() * 2);
let x8 = x8w < 500 ? x8w + radius : x8w;
let x9w = (cnvs.width / 2) * (Math.random() * 2);
let x9 = x9w < 500 ? x9w + radius : x9w;
let x0w = (cnvs.width / 2) * (Math.random() * 2);
let x0 = x0w < 500 ? x0w + radius : x0w;
let y = radius;

let dx1 = x1 < 500 ? (Math.random() * x1) / cnvs.height / 2 : (Math.random() * x1 - cnvs.width) / cnvs.height / 2;
let dx2 = x2 < 500 ? (Math.random() * x2) / cnvs.height / 2 : (Math.random() * x2 - cnvs.width) / cnvs.height / 2;
let dx3 = x3 < 500 ? (Math.random() * x3) / cnvs.height / 2 : (Math.random() * x3 - cnvs.width) / cnvs.height / 2;
let dx4 = x4 < 500 ? (Math.random() * x4) / cnvs.height / 2 : (Math.random() * x4 - cnvs.width) / cnvs.height / 2;
let dx5 = x5 < 500 ? (Math.random() * x5) / cnvs.height / 2 : (Math.random() * x5 - cnvs.width) / cnvs.height / 2;
let dx6 = x6 < 500 ? (Math.random() * x6) / cnvs.height / 2 : (Math.random() * x6 - cnvs.width) / cnvs.height / 2;
let dx7 = x7 < 500 ? (Math.random() * x7) / cnvs.height / 2 : (Math.random() * x7 - cnvs.width) / cnvs.height / 2;
let dx8 = x8 < 500 ? (Math.random() * x8) / cnvs.height / 2 : (Math.random() * x8 - cnvs.width) / cnvs.height / 2;
let dx9 = x9 < 500 ? (Math.random() * x9) / cnvs.height / 2 : (Math.random() * x9 - cnvs.width) / cnvs.height / 2;
let dx0 = x0 < 500 ? (Math.random() * x0) / cnvs.height / 2 : (Math.random() * x0 - cnvs.width) / cnvs.height / 2;
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