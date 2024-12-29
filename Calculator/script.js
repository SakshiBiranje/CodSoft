document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = "";
  let previousInput = "";
  let operator = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "clear") {
        currentInput = "";
        previousInput = "";
        operator = "";
        display.textContent = "0";
        return;
      }

      if (value === "=") {
        if (previousInput && currentInput && operator) {
          currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
          display.textContent = currentInput;
          previousInput = "";
          operator = "";
        }
        return;
      }

      if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput) {
          operator = value;
          previousInput = currentInput;
          currentInput = "";
        }
        return;
      }

      currentInput += value;
      display.textContent = currentInput;
    });
  });
});
