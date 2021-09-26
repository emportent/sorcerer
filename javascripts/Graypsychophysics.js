var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
for (var i = 0; i < canvas.width; i += 100) {
  ctx.fillStyle = 'white';
  ctx.fillRect(i, 0, 3, canvas.height);
}
for (var i = 0; i < canvas.height; i += 100) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, i, canvas.width, 1);
}

ctx.fillStyle = 'yellow';
for (var i = 0; i < canvas.width; i += 100) {
  for (var j = 0; j < canvas.height; j += 100) {
    ctx.beginPath();
    ctx.arc(i, j, 5, 2, Math.PI * 2, true);
    ctx.fill();
  }
}
var colors = ['yellow', 'blue'];
var i = 0;
setInterval(function() {
  ctx.fillStyle = colors[i];
  i = (i + 1) % colors.length;
  for (var j = 0; j < canvas.width; j += 100) {
    for (var k = 0; k < canvas.height; k += 100) {
      ctx.beginPath();
      ctx.arc(j, k, 12, 45, Math.PI * 2, true);
      ctx.fill();
    }
  }
}, 1000 / 55);

/* add a slider to change color change speed */
var slider = document.createElement('input');
slider.type = 'range';
slider.min = 1;
slider.max = 1000;
slider.value = 55;
slider.onchange = function() {
  setInterval(function() {
    ctx.fillStyle = colors[i];
    i = (i + 1) % colors.length;
    for (var j = 0; j < canvas.width; j += 100) {
      for (var k = 0; k < canvas.height; k += 100) {
        ctx.beginPath();
        ctx.arc(j, k, 12, 45, Math.PI * 2, true);
        ctx.fill();
      }
    }
  }, 1000 / slider.value);
};
document.body.appendChild(slider);
