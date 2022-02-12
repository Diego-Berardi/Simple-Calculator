// btns
const div_btnOperators = document.querySelectorAll("[data-type=operator]");
const div_btnNumbers = document.querySelectorAll("[data-type=number]");
const div_btnDeleteAll = document.querySelector("[data-type=deleteAll]");
const div_btnDelete = document.querySelector("[data-type=delete]");
const div_btnDot = document.querySelector("[data-type=dot]");
const div_btnEqual = document.querySelector("[data-type=equal]");
const div_btnNegative = document.querySelector("[data-type=negative]");

// display
const div_displayPrev = document.querySelector(".prev");
const div_displayOut = document.querySelector(".out");

const addNumber = (e) => {
  if (div_displayOut.textContent === "0") div_displayOut.textContent = "";
  if (div_displayPrev.textContent.includes("=")) {
    div_displayPrev.textContent = "0";
    div_displayOut.textContent = "";
  }

  div_displayOut.textContent += e.target.textContent;
};

const handleOperators = (e) => {
  div_displayPrev.textContent =
    div_displayOut.textContent + e.target.textContent;

  div_displayOut.textContent = "0";
};

const handleEqueal = (e) => {
  if (div_displayPrev.textContent.includes("=")) return;

  const arrayNum1 = div_displayPrev.textContent.split("");
  const operator = arrayNum1[arrayNum1.length - 1];
  const num1 = Number(arrayNum1.slice(0, arrayNum1.length - 1).join(""));

  div_displayPrev.textContent +=
    div_displayOut.textContent + e.target.textContent;

  const num2 = Number(div_displayOut.textContent);

  if (operator === "+")
    div_displayOut.textContent = Math.round((num1 + num2) * 100) / 100;
  if (operator === "-")
    div_displayOut.textContent = Math.round((num1 - num2) * 100) / 100;
  if (operator === "x")
    div_displayOut.textContent = Math.round(num1 * num2 * 100) / 100;
  if (operator === "÷")
    div_displayOut.textContent = Math.round((num1 / num2) * 100) / 100;
};

const handleNegative = () => {
  div_displayOut.textContent = -div_displayOut.textContent;
};
const handleDeleteAll = () => {
  div_displayPrev.textContent = "0";
  div_displayOut.textContent = "0";
};

const handleDot = () => {
  div_displayOut.textContent += ".";
};
const handleDelete = () => {
  const arr = div_displayOut.textContent.split("");
  div_displayOut.textContent = arr.slice(0, arr.length - 1).join("");
  if (arr.length == 1) div_displayOut.textContent = "0";
};

div_btnNumbers.forEach((item) => item.addEventListener("click", addNumber));
div_btnOperators.forEach((item) =>
  item.addEventListener("click", handleOperators)
);
div_btnEqual.addEventListener("click", handleEqueal);
div_btnNegative.addEventListener("click", handleNegative);
div_btnDeleteAll.addEventListener("click", handleDeleteAll);
div_btnDot.addEventListener("click", handleDot);
div_btnDelete.addEventListener("click", handleDelete);
