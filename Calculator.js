let outputVal = document.getElementById('output');

function display(num) {
    outputVal.value += num;
}

function calculate() {
    try {
        outputVal.value = eval(outputVal.value);
    } catch (err) {
        alert('invalid')
    }
}

function Clear() {
    outputVal.value = "";
}

function del() {
    outputVal.value = outputVal.value.slice(0, -1);
}