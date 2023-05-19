document.getElementById('red').addEventListener('click', function () {
  document.body.style.backgroundColor = 'red';
});

document.getElementById('green').addEventListener('click', function () {
  document.body.style.backgroundColor = 'green';
});

document.getElementById('blue').addEventListener('click', function () {
  document.body.style.backgroundColor = 'blue';
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
  document.body.style.backgroundColor = getRandomColor();
});
