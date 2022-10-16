function display(val) {
    document.getElementById("result").value += val;
    return val;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    return y;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

var calcKeys = document.getElementById("calcKeys");
calcKeys.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("equalsTo").click();
    }
});

const backSpace=document.getElementById('backSpace')
const textBox=document.getElementById('result')
backSpace.addEventListener('click', function () {
    textBox.value = textBox.value.substring(0, textBox.value.length - 1)
});
