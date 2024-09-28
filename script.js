let add = function (a, b) {
  return parseFloat(a) + parseFloat(b);
};
let subtract = function (a, b) {
  return parseFloat(a) - parseFloat(b);
};
let multiply = function (a, b) {
  return parseFloat(a) * parseFloat(b);
};
let divide = function (a, b) {
  return parseFloat(a) / parseFloat(b);
};

let display = document.getElementById("display");
let firstValue = 0;
let secondValue = 0;
let operatorValue = "";
let button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      display.innerText = "0";
    } else if (
      e.target.innerText === "+" ||
      e.target.innerText === "-" ||
      e.target.innerText === "*" ||
      e.target.innerText === "/"
    ) {
      firstValue = display.innerText;
      display.innerText = "";
      operatorValue = e.target.innerText;
    } else if (e.target.innerText === "=") {
      secondValue = display.innerText;
      display.innerText = operate(operatorValue, firstValue, secondValue);
    } else {
      if (display.innerText === "0") {
        display.innerText = "";
      }

      display.innerText += e.target.innerText;
    }
  });
});

let operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};
