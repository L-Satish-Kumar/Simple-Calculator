function DisplayValue(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result
}

function Delete() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    var cursorPosition = display.selectionStart;

    // If cursor is at the end of the string, delete the last character
    if (cursorPosition === currentValue.length) {
        display.value = currentValue.slice(0, -1);
    } else {
        // Remove the character at the cursor position
        display.value = currentValue.slice(0, cursorPosition) + currentValue.slice(cursorPosition + 1);
    }
}

function Clear() {
    document.getElementById('display').value = ''
}