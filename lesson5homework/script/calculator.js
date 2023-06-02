function one() {
    let number1 = document.getElementById("1").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number1;
}


function two() {
    let number2 = document.getElementById("2").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number2;
}


function three() {
    let number3 = document.getElementById("3").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number3;
}


function four() {
    let number4 = document.getElementById("4").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number4;
}



function five() {
    let number5 = document.getElementById("5").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number5;
}




function six() {
    let number6 = document.getElementById("6").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number6;
}



function seven() {
    let number7 = document.getElementById("7").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number7;
}



function eight() {
    let number8 = document.getElementById("8").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number8;
}




function nine() {
    let number9 = document.getElementById("9").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDysplayValue + number9;
}



function plus() {
    let plus = document.getElementById("plus").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;


    if (oldDysplayValue == "") {
        return;
    }

    count = 0;
    for (let char of oldDysplayValue) {
        if (char == "+") {
            count++;
        }
    }

    if (count > 0) {
        return;
    }


    document.getElementById("calcDisplay").value = oldDysplayValue + plus;
}



function minus() {
    let minus = document.getElementById("minus").innerHTML;
    let oldDysplayValue = document.getElementById("calcDisplay").value;

    if (oldDysplayValue == "") {
        return;
    }

    count1 = 0;
    for (let char1 of oldDysplayValue) {
        if (char1 == "-") {
            count1--;
        }
    }

    if (count1 > 0) {
        return;
    }

    document.getElementById("calcDisplay").value = oldDysplayValue + minus;
}




function equal() {
    let oldDysplayValue = document.getElementById("calcDisplay").value;

    if (oldDysplayValue.includes("+")) {
        let numbers = oldDysplayValue.split("+");

        let sum = 0;

        for (let number of numbers) {
            sum = sum + parseInt(number);
        }

        document.getElementById("calcDisplay").value = sum;
    }



    if (oldDysplayValue.includes("-")) {
        let numbers = oldDysplayValue.split("-");

        let sum = 0;

        for (let number of numbers) {
            sum = - parseInt(number) - sum;
        }

        document.getElementById("calcDisplay").value = sum;
    }


    
}

