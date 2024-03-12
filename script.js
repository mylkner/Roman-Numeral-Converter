const inputValue = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

function converter(input) {
  let roman = "";
   
  if (input === 0) {
    return "";
  }

  for (let i = 0; i < romanNumerals.length; i++) {
    if (input >= romanNumerals[i][1]) {
      return roman += romanNumerals[i][0] + converter(input - romanNumerals[i][1]);
    }
  }
};

function userInput() {
  const inputInt = parseInt(inputValue.value);

  if (!inputInt || isNaN(inputInt)) {
    inputValue.value = "";
    output.style.display = "block";
    output.innerText = "Please enter a valid number";
    return;
  } else if (inputInt <= 0) {
    inputValue.value = "";
    output.style.display = "block";
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt >= 4000) {
    inputValue.value = "";
    output.style.display = "block";
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  
  output.style.display = "block";
  output.textContent = converter(inputInt);
  inputValue.value = "";
}

convertBtn.addEventListener("click", userInput);

inputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userInput();
  }
});