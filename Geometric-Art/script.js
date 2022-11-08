const btn = document.getElementById("btn");
const shapes = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
];

let hexString = "0123456789abcdef";

let randomColor = () => {
    let hexCode = '#';
    for ( i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    let i = Math.floor(Math.random() * shapes.length);
    box.classList.add(shapes[i]);
    box.style.backgroundColor = randomColor();
    // box.style.backgroundColor = colors[j];
  });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);