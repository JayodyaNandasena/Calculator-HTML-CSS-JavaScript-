function setValue(x){
    document.getElementById("display").value+=x;
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);

        if (!isNaN(result)) {
            document.getElementById("display").value = result;
        } else {
            document.getElementById("display").value = "ERROR";
        }
    } catch (e) {
        document.getElementById("display").value = "ERROR";
    }
}

function changeSign() {
    var display = document.getElementById("display");
    var currentValue = display.value;

    if (!isNaN(currentValue)) {
        display.value = -currentValue;
    }
}


function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearLast() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1); // Remove the last character
}