document.getElementById('red').addEventListener('click', function () {
  document.body.style.backgroundColor = 'red';
  updateTextColor();
});

document.getElementById('green').addEventListener('click', function () {
  document.body.style.backgroundColor = 'green';
  updateTextColor();
});

document.getElementById('blue').addEventListener('click', function () {
  document.body.style.backgroundColor = 'blue';
  updateTextColor();
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('random').addEventListener('click', function () {
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  updateTextColor(hexToRgb(randomColor));
});

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

function updateTextColor(rgbColor) {
  let bgColor = rgbColor;
  if (!rgbColor) {
    bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    bgColor = bgColor.substring(4, bgColor.length - 1).split(', ');
  }

  let brightness = Math.round(((parseInt(bgColor[0]) * 299) + (parseInt(bgColor[1]) * 587) + (parseInt(bgColor[2]) * 114)) / 1000);

  document.getElementById('header').style.color = (brightness < 128) ? 'white' : 'black';
}
