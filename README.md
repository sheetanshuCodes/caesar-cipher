# Caesar Cipher JavaScript Implementation

This repository contains a simple implementation of the Caesar Cipher, a popular encryption algorithm that was used by Julius Caesar to protect his confidential information. The Caesar cipher works by shifting each letter in a string by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.

For example, a rotation by 3 would map 'w', 'x', 'y' and 'z' to 'z', 'a', 'b', and 'c' respectively.

## Example

```javascript
caesarCipher("middle-Outz", 2) // ➞ "okffng-Qwvb"
```
This output is derived as follows: m -> o, i -> k, d -> f, d -> f, l -> n, e -> g, - remains -, O -> Q, u -> w, t -> v, z -> b

## Usage

This is a JavaScript function, `caesarCipher()`, that takes an input string and a cipher index (the shift number for the encryption) as parameters. The function returns the encrypted string.

The function can be used as part of a larger system that requires simple encryption, or it can be used to illustrate the Caesar cipher in an educational context.

Here is the function definition:

```javascript
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
```

To demonstrate the usage of `caesarCipher()` in a web application, it is implemented along with a simple form. User can input the string to be encrypted and the shift number for the cipher. The encrypted result will be displayed on the page.

The related code is:

```javascript
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
```

The `displayCipher` function is called when the form is submitted. It gets the input values, calls `caesarCipher()` function, displays the resulting encrypted string, and then resets the form.

## Contribution

Feel free to contribute to this project by creating issues or submitting pull requests. All contributions are welcomed.

## License

This project is licensed under the MIT License.
