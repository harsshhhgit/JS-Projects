var characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    var randChar = characters[Math.floor(Math.random() * characters.length)];
    color = color.concat(randChar);
  }
  document.getElementById("color-code").innerHTML = color;
  document.body.style.backgroundColor = color;
}