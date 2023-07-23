const password = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const textLength = document.getElementById("text-length");
const slider = document.getElementById("range-element");
const isLower = document.getElementById("isLower");
const isUpper = document.getElementById("isUpper");
const isNum = document.getElementById("isNum");
const isSpecial = document.getElementById("isSpecial");
const generateBtn = document.getElementById("generate");

isLower.checked = true;
isUpper.checked = true;
isNum.checked = true;
isSpecial.checked = true;

let lowerStr = "abcdefghijklmnopqrstuvwxyz";
let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let special = "!#$%^&*";

slider.addEventListener("input", function () {
  textLength.textContent = `Length: ${slider.value}`;
});

const generateRandom = (str) => {
  return str.charAt(Math.floor(Math.random() * str.length));
};

generateBtn.addEventListener("click", function () {
  let length = slider.value;
  let passwordStr = "";
  let characterStr = "";

  characterStr += isUpper.checked ? upperStr : "";
  characterStr += isLower.checked ? lowerStr : "";
  characterStr += isNum.checked ? number : "";
  characterStr += isSpecial.checked ? special : "";

  for (let i = 0; i < length; i++) {
    passwordStr += generateRandom(characterStr);
  }
  password.textContent = passwordStr;
});

copyBtn.addEventListener("click", function () {
  let text = password.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied to clipboard!`);
  }),
    () => {
      //   console.log("Failed");
      alert("Failed to copy clipboard");
      // error handling code here...
    };
});
