const numbers = Array.from(document.querySelectorAll(".number"));

const add = document.querySelector(".plus");
const subtract = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

const allClear = document.querySelector(".all-clear");
const equalsTo = document.querySelector(".equals-to");
let display = document.querySelector(".display");

let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;

numbers.forEach((number) => {
  number.addEventListener("click", () =>
    registerToOperand(parseInt(number.textContent))
  );
});

function registerToOperand(number) {
  if (operator === null) {
    if (operand1 === null) operand1 = 0;
    operand1 = number + 10 * operand1;
    display.textContent = operand1;
  } else {
    if (operand2 === null) operand2 = 0;
    operand2 = number + 10 * operand2;
    display.textContent = operand2;
  }
}

add.addEventListener("click", () => {
  if (operand1 !== null && operand2 !== null)
    doConditionalOperation(addOperands);
  operator = "addition";
});

subtract.addEventListener("click", () => {
  if (operand1 !== null && operand2 !== null)
    doConditionalOperation(subtractOperands);
  operator = "subtract";
});

multiply.addEventListener("click", () => {
  if (operand1 !== null && operand2 !== null)
    doConditionalOperation(multiplyOperands);
  operator = "multiply";
});

divide.addEventListener("click", () => {
  if (operand1 !== null && operand2 !== null)
    doConditionalOperation(divideOperands);
  operator = "divide";
});

function doConditionalOperation(operatorFunction) {
  operatorFunction(operand1, operand2);
  operand1 = result;
  operand2 = null;
}

equalsTo.addEventListener("click", () => {
  switch (operator) {
    case "addition":
      addOperands(operand1, operand2);
      resetOperators();
      break;
    case "subtract":
      subtractOperands(operand1, operand2);
      resetOperators();
      break;
    case "divide":
      divideOperands(operand1, operand2);
      resetOperators();
      break;
    case "multiply":
      multiplyOperands(operand1, operand2);
      resetOperators();
      break;
    default:
      display.textContent = "NOTHING";
  }
});

function addOperands(operand1, operand2) {
  result = operand1 + operand2;
  displayResult();
}

function subtractOperands(operand1, operand2) {
  result = operand1 - operand2;
  displayResult();
}

function multiplyOperands(operand1, operand2) {
  result = operand1 * operand2;
  displayResult();
}

function divideOperands(operand1, operand2) {
  if (operand2 === 0) {
    display.textContent = "Common Man!!";
    return;
  }

  result = operand1 / operand2;
  displayResult();
}

allClear.addEventListener("click", () => {
  resetOperators();
  display.textContent = "0";
});

function displayResult() {
  display.textContent = result;
}

function resetOperators() {
  operand1 = null;
  operand2 = null;
  operator = null;
  result = null;
}
