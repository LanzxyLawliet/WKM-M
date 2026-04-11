//Calc Project

const display = document.getElementById('display');

function AppendtoDisplay(value) {
    display.value += value;
}

function ClearDisplay() {
    display.value = '';
}

function CalculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}