const canvas = document.getElementById('#canvas');
const ctx = canvas.getContext('2d');

let corLinha = "red";
canvas = corLinha;
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(120,160, 180,10, 220,140);
ctx.stroke();
