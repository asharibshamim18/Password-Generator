function stretch() {
    let rangeVal = document.getElementById('rangeVal');
    let range = document.getElementById('range');

    rangeVal.textContent = range.value;
}


function generate() {
    let range = document.getElementById('range').value;
    let upperCase = document.getElementById('upperCase').checked;
    let lowerCase = document.getElementById('lowerCase').checked;
    let numbers = document.getElementById('numbers').checked;
    let symbols = document.getElementById('symbols').checked;

    let UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let Numbers = '0123456789';
    let Symbols = '!@#$*%&?.<>~`';

    let character = '';
    if (upperCase) { character += UpperCase };
    if (lowerCase) { character += LowerCase };
    if (numbers) { character += Numbers };
    if (symbols) { character += Symbols };

    if (character === '') {
        alert('Select atleast any one checkbox')
        return;
    }

    let Password = '';
    for (let i = 0; i < range; i++) {
        Password += character.charAt(Math.floor(Math.random() * character.length))
    }

    document.getElementById('password').value = Password;
}



function copyToClipboard() {
    const passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}



