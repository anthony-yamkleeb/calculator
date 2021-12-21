function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (operator,num,num2) {
    if (operate === "+") {
        return add(num,num2);
    }

    if (operate === "-") {
        return subtract(num,num2);
    }

    if (operate === "*") {
        return multiply(num,num2);
    }

    if (operate === "/") {
        return divide(num,num2);
    }
}