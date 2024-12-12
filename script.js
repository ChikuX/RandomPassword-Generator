/*
    Random Password Generator
    Created by https://github.com/ChikuX
    Date: 12-12-2024

    Project Description:
    This project is a responsive and interactive Random Password Generator. It allows users to generate a random password 
    based on selected options (Alphabets, Numbers, Symbols) and copy the password to the clipboard with a simple click. 
    The project combines HTML, TailwindCSS for styling, and JavaScript for interactivity.

    Features:
    - Generate a password of fixed length (12 characters).
    - Options to include alphabets, numbers, and symbols.
    - Copy functionality with user feedback for successful actions.
    - Responsive design using TailwindCSS.

    License:
    This code is © Chiku, 2024. All rights reserved.
    Redistribution or use of this code in any form must include proper attribution to the original author. 
    Commercial use requires explicit permission from the author.
*/


const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

const passwordDisplay = document.getElementById("pass-gen");
const copyButton = document.getElementById("copy-item");
const alphabetsCheckbox = document.getElementById("alphabets");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate-button");

function generatePassword() {
    let characterPool = "";
    if (alphabetsCheckbox.checked) characterPool += alphabets;
    if (numbersCheckbox.checked) characterPool += numbers;
    if (symbolsCheckbox.checked) characterPool += symbols;

    if (characterPool === "") {
        alert("Please select at least one option to generate a password!");
        return;
    }

    const passwordLength = 12;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }
    passwordDisplay.textContent = password;
}

function copyToClipboard() {
    const password = passwordDisplay.textContent.trim();
    if (password === "") {
        alert("No password to copy. Please generate one first!");
        return;
    }
    navigator.clipboard.writeText(password).then(() => {
        const originalText = copyButton.querySelector("h2").textContent;
        copyButton.querySelector("h2").textContent = "Copied!"; 
        
        setTimeout(() => {
            copyButton.querySelector("h2").textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy password. Please try again.", err);
    });
}

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyToClipboard);
