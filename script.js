const numbers = Array.from(document.querySelectorAll(".number"));

const operators = Array.from(document.querySelectorAll(".operator"));

const allClear = document.querySelector(".all-clear");
const equalsTo = document.querySelector(".equals-to");
let display = document.querySelector(".display");

let operand1 = null;
let operand2 = null;
let currentOperator = null;
let result = null;

numbers.forEach((number) => {
  number.addEventListener("click", () =>
    registerOperand(parseInt(number.textContent))
  );
});

function registerOperand(number) {
  if (currentOperator === null) {
    if (operand1 === null) operand1 = 0;
    operand1 = number + 10 * operand1;
    display.textContent = operand1;
  } else {
    if (operand2 === null) operand2 = 0;
    operand2 = number + 10 * operand2;
    display.textContent = operand2;
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operand1 !== null && operand2 !== null) {
      operate(currentOperator);
    }
    currentOperator = operator.textContent;
  });
});

function operate(operator) {
  switch (operator) {
    case "+":
      addOperands(operand1, operand2);
      break;
    case "−":
      subtractOperands(operand1, operand2);
      break;
    case "×":
      multiplyOperands(operand1, operand2);
      break;
    case "÷":
      divideOperands(operand1, operand2);
      break;
    default:
      display.textContent = "Invalid";
      break;
  }
}

function addOperands(num1, num2) {
  result = num1 + num2;
  updateOperators();
  displayResult();
}

function subtractOperands(num1, num2) {
  result = num1 - num2;
  updateOperators();
  displayResult();
}

function multiplyOperands(num1, num2) {
  result = num1 * num2;
  updateOperators();
  displayResult();
}

function divideOperands(num1, num2) {
  if (num2 === 0) {
    display.textContent = "Common Man!!";
    return;
  }

  result = num1 / num2;
  updateOperators();
  displayResult();
}

function updateOperators() {
  if (currentOperator !== null) {
    operand1 = result;
    operand2 = null;
  }
}

function displayResult() {
  let displayValue = Number(result).toFixed(5);
  displayValue = parseFloat(displayValue);
  display.textContent = displayValue;
}

allClear.addEventListener("click", () => {
  resetOperators();
  display.textContent = "0";
});

equalsTo.addEventListener("click", () => {
  if (operand1 !== null && operand2 !== null) {
    operate(currentOperator);
  }
  resetOperators();
});

function resetOperators() {
  operand1 = null;
  operand2 = null;
  currentOperator = null;
  result = null;
}
