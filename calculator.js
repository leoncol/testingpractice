function calculator(number1, number2, operation) {
  if (
    operation === "+" ||
    operation === "+" ||
    operation === "/" ||
    operation === "*" ||
    operation === "-"
  ) {
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "/":
        return number1 / number2;
      case "*":
        return number1 * number2;
    }
  } else {
    return "Invalid operator";
  }
}

module.exports = calculator;
