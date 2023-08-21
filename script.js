const cnvs = document.getElementById("cnvs");
const ctx = cnvs.getContext("2d");

var num = 1;
setInterval(function () {
    ctx.fillRect(0,0,num,num);
    num++;
}, 100);