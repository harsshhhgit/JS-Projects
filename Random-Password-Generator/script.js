const lengthSlider = document.querySelector(".pass-length input");
options = document.querySelectorAll(".option input");
passwordInput = document.querySelector(".input-box input");
passIndicator = document.querySelector(".pass-indicator");
note = document.getElementById("note");
copyButton = document.getElementById('copy-button');
const generateBtn = document.querySelector(".generate-btn");


const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const passwordTips = ['Never use personal information such as your name, birthday, user name, or email address.', "Don't use the same password for each account.", 'Random passwords are the strongest.', 'Avoid using words that can be found in the dictionary.', 'Try to include numbers, symbols, and both uppercase and lowercase letters.', 'Use a longer password. Your password should be at least six characters long.', 'Add commas to you passwords to disrupt the formatting if they get dumped to a CSV file.', 'Do NOT use proper names or fictional characters']

const generatePassword = () => {
    let staticPassword = "";
    randomPassword = "";
    excludeDuplicate = false;
    passLength = lengthSlider.value;

    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if (option.id === "spaces") {
                staticPassword += `  ${staticPassword}  `;
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword;
}

const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? 'weak' : lengthSlider.value <= 16 ? 'medium' : 'strong';
}

const updateSlider = () => {
    document.querySelector('.pass-length span').innerText = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
}

updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyButton.className = "fa-solid fa-clipboard-check";
    // copyButton.className="fa-solid fa-square-check";
    setTimeout(() => {
        copyButton.className = "fa-solid fa-copy";
    }, 1500);
}

setInterval(() => {
    note.innerText = passwordTips[Math.floor(Math.random() * passwordTips.length)];
}, 15000)

lengthSlider.addEventListener("input", updateSlider)
generateBtn.addEventListener("click", generatePassword)
copyButton.addEventListener("click", copyPassword)