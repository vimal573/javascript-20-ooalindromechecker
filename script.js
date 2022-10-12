const palValueEl = document.getElementById("palValue");
const checkBtnEl = document.querySelector(".check-btn");
const resTextEl = document.querySelector(".res-text");

checkBtnEl.addEventListener("click", () => {
  const palString = palValueEl.value;

  if (!palString) resTextEl.textContent = `Please enter some value`;

  const checkPalindrome = [...palString].reverse().join("") === palString;

  if (checkPalindrome) {
    resTextEl.textContent = `Value is palindrome`;
  } else {
    resTextEl.textContent = `Value is not palindrome`;
  }
});
