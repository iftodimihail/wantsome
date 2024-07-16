function Calculator() {
  let number1, number2;

  function read() {
    number1 = parseFloat(document.getElementById("operand1").value);
    number2 = parseFloat(document.getElementById("operand2").value);
  }

  function clear() {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
  }

  function sum() {
    read();

    const sumResult = number1 + number2;
    const result = document.getElementById("result");
    result.innerHTML = `${number1} + ${number2} = ${sumResult}`;

    clear();
  }

  function diff() {
    read();

    const difResult = number1 - number2;
    const result = document.getElementById("result");
    result.innerHTML = `${number1} - ${number2} = ${difResult}`;

    clear();
  }

  function multiply() {
    read();

    const mulResult = number1 * number2;
    const result = document.getElementById("result");
    result.innerHTML = `${number1} * ${number2} = ${mulResult}`;

    clear();
  }

  function divide() {
    read();
    const result = document.getElementById("result");

    if (number2 === 0) {
      result.innerHTML = "Can't divide by 0";
      return;
    }

    const divResult = number1 / number2;
    result.innerHTML = `${number1} / ${number2} = ${divResult}`;

    clear();
  }

  return {
    sum,
    diff,
    multiply,
    divide,
  };
}

const calculator = Calculator();

const addButton = document.getElementById("add");
const diffButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");

addButton.addEventListener("click", calculator.sum);
diffButton.addEventListener("click", calculator.diff);
mulButton.addEventListener("click", calculator.multiply);
divButton.addEventListener("click", calculator.divide);
