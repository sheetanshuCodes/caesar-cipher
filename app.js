const caesarCipher = (inputString, cipherIndex) => {
  const lowerAlphabetArray = Array.from("abcdefghijklmnopqrstuvwxyz");
  const upperAlphabetArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  const inputArray = Array.from(inputString);
  const outputArray = [];
  const regex = /[a-zA-Z]/;

  inputArray.forEach((char) => {
    if (regex.test(char)) {
      if (char !== char.toUpperCase()) {
        outputArray.push(
          lowerAlphabetArray[
            (lowerAlphabetArray.indexOf(char) + cipherIndex) % 26
          ]
        );
      } else {
        outputArray.push(
          upperAlphabetArray[
            (upperAlphabetArray.indexOf(char) + cipherIndex) % 26
          ]
        );
      }
    } else {
      outputArray.push(char);
    }
  });
  const cipheredString = outputArray.join("");
  return cipheredString;
};

const incomingString = document.querySelector(".encryptString");
const displayEncryptedString = document.querySelector(".encryptedMessage");

const displayCipher = () => {
  const inputText = incomingString.inputString.value;
  const shiftNumber = Number(incomingString.shiftAlphabet.value);
  displayEncryptedString.textContent = `${caesarCipher(
    inputText,
    shiftNumber
  )}`;
  incomingString.reset();
};

incomingString.addEventListener("submit", (e) => {
  e.preventDefault();
  displayCipher();
});
