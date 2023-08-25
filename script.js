// https://javascript.tutorials24x7.com/blog/how-to-draw-animated-circles-in-html5-canvas

const PI = Math.PI;
const cnvs = document.getElementById("cnvs");
const ctx = cnvs.getContext("2d");
cnvs.width = 1000;
cnvs.height = 600;

function Asteroid () {
    this.radius = (Math.random() - 0.75) * 2 > 0 ? 20 : 10;
    this.xw = (cnvs.width / 2) * (Math.random() * 2);
    this.x = this.xw < 500 ? this.xw + this.radius : this.xw;
    this.y = - this.radius;
    this.dx = (Math.random() - 0.5) * 2 > 0 ? (Math.random() * -this.x) / cnvs.height * 2 : (Math.random() * cnvs.width - this.x) / cnvs.height * 2;
    this.dy = 4;

    this.update = function () {
        if (this.y + this.radius > cnvs.height) return;
  
        this.x += this.dx;
        this.y += this.dy;     
        this.draw();
    }

    this.draw = function () {
        if (weapons_cords[cindex]?.y && weapons_cords[cindex]?.y > 0) for (let wc = cindex; wc < c; wc++) {
            
        } else if (weapons_cords[cindex + 1]?.y && weapons_cords[cindex + 1]?.y > 0) for (let wc = cindex + 1; wc < c; wc++) {
            
        }

        if (this.x > ship_crds.x - 25 && this.x < ship_crds.x + 25 &&
            this.y + this.radius > ship_crds.y - 30 && this.y - this.radius < ship_crds.y
        ) asteroids[0] = true;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * PI);
        ctx.fill();
    }
}

function Weapon (id) {
    this.x = ship_crds.x;
    this.y = ship_crds.y - 36;
    this.dy = -20;
    this.id = id;

    this.update = function () {
        if (this.y + 10 < 0) {
            delete weapons[this.id];
            delete weapons_cords[this.id]
            return;
        };

        this.y += this.dy;
        weapons_cords[this.id] = {
            id: this.id,
            x: this.x,
            y: this.y
        };
        this.draw();
    }

    this.draw = function () {
        ctx.beginPath();
        ctx.moveTo(this.x - 2, this.y)
        ctx.lineTo(this.x - 2, this.y - 10)
        ctx.lineTo(this.x + 2, this.y - 10)
        ctx.lineTo(this.x + 2, this.y)
        ctx.lineTo(this.x - 2, this.y)
        ctx.fill();
    }
}

const asteroids = [false];
const weapons = [];
const weapons_cords = {

};

const active = setInterval(() => {
    asteroids.push(new Asteroid())
}, 300);

function rain () {
    if (!asteroids[0]) window.requestAnimationFrame(rain)

    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    const AL = asteroids.length

    for (let c = 1; c < AL; c++) asteroids[c].update()
}

function ship () {
    if (!asteroids[0]) window.requestAnimationFrame(ship);
    else return;

    ctx.beginPath();
    ctx.moveTo(ship_crds.x, ship_crds.y)
    ctx.lineTo(ship_crds.x - 15, ship_crds.y);
    ctx.lineTo(ship_crds.x, ship_crds.y - 30);
    ctx.lineTo(ship_crds.x + 15, ship_crds.y);
    ctx.lineTo(ship_crds.x, ship_crds.y)
    ctx.fill();
}

function fire () {
    if (!asteroids[0]) window.requestAnimationFrame(fire);
    else return
    
    const WL = weapons.length;
    for (let c = 0; c < WL; c++) if (weapons[c]) weapons[c].update();
}

const ship_crds = {
    x: cnvs.width / 2,
    y: cnvs.height - 5
}

var c = 0;
var cindex;

window.addEventListener("keypress", (event) => {
    if (event.key.toLowerCase() == "a") ship_crds.x -= 50
    else if (event.key.toLowerCase() == "w") ship_crds.y -= 50
    else if (event.key.toLowerCase() == "d") ship_crds.x += 50
    else if (event.key.toLowerCase() == "s") ship_crds.y += 50
    else if (event.key.toLowerCase() == "j") {
        cindex = (c - 1) - (Object.keys(weapons_cords).length - 1)
        weapons.push(new Weapon(c++));
    }
});

window.addEventListener("keypress", (event) => {
    let co = c - 1;
    if (event.key == " ") console.log(weapons_cords[cindex]);
})

rain();
ship();
fire();