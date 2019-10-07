function btnMultiplay(){
    var digit1 = document.querySelector('#firstNumber').value;
    var digit2 = document.querySelector('#secondNumber').value;
    document.querySelector("#result").innerHTML = parseInt(digit1, 10 ) * parseInt(digit2, 10);
}

function btnDivide(){
    var digit1 = document.querySelector('#firstNumber').value;
    var digit2 = document.querySelector('#secondNumber').value;
    document.querySelector("#result").innerHTML = parseInt(digit1, 10 ) / parseInt(digit2, 10);
}


function btnClear(){
    var digit1 = document.querySelector('#firstNumber').value;
    var digit2 = document.querySelector('#secondNumber').value;
    document.querySelector("#result").innerHTML = '';
}
