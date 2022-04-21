'use strict';

function takeValue(x) {
    document.getElementById('textBox').value += x;
    console.log(x)
}

function clearInput(y) {
    document.getElementById('textBox').value = y;
    console.log('clear');
}

function calculateResult() {
    var result = eval(document.getElementById('textBox').value);
    document.getElementById('textBox').value = result;
    console.log(result)
}

function deleteInput() {
    var input = document.getElementById("textBox");
    input.value = input.value.substring(0, input.value.length - 1);
}