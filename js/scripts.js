const checkbox1Element = document.getElementById('checkbox1');
const checkbox2Element = document.getElementById('checkbox2');
const checkbox3Element = document.getElementById('checkbox3');
const checkbox4Element = document.getElementById('checkbox4');

//clase ''checkbox'' para el queryselectorall

const generatePasswordElement = document.getElementById('generatePassword');
const rangeElement = document.getElementById('range');
const lengthPassElement = document.getElementById('lengthPass');
const passwordElement = document.getElementById('password');

const uppercaseLetters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = ' .,/*@;:&%()·/$-><= ';

let passwordLength = rangeElement.value;
let newPassword = '';

const checkboxInfo = () => {
  // esta desactivado por defecto y si selecciono un checkbox se activa.
  if (
    checkbox1Element.checked ||
    checkbox2Element.checked ||
    checkbox3Element.checked ||
    checkbox4Element.checked
  ) {
    generatePasswordElement.disabled = false;
  } else {
    generatePasswordElement.disabled = true;
  }
};

const lengthPass = event => {
  // largo de la password segun el range.
  passwordLength = event.target.value;
  lengthPassElement.textContent = 'Length: ' + event.target.value;
};

const generatePass = () => {
  // esta es la que acumula los caracteres
  let totalCharacter = '';

  if (checkbox1Element.checked) {
    totalCharacter += uppercaseLetters;
  }
  if (checkbox2Element.checked) {
    totalCharacter += lowercaseLetters;
  }
  if (checkbox3Element.checked) {
    totalCharacter += numbers;
  }
  if (checkbox4Element.checked) {
    totalCharacter += symbols;
  }
  newPassword = '';

  if (checkbox1Element.checked) {
    newPassword += uppercaseLetters.charAt(
      Math.floor(Math.random() * uppercaseLetters.length)
    );
  }
  if (checkbox2Element.checked) {
    // al menos una de cada grupo
    newPassword += lowercaseLetters.charAt(
      Math.floor(Math.random() * lowercaseLetters.length)
    );
  }
  if (checkbox3Element.checked) {
    newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  if (checkbox4Element.checked) {
    newPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }

  for (let i = newPassword.length; i < passwordLength; i++) {
    // llena la contraseña de totalCharacter
    const randomChar = totalCharacter.charAt(
      Math.floor(Math.random() * totalCharacter.length)
    );
    newPassword += randomChar;
  }

  passwordElement.textContent = newPassword; // imprimo
};
checkbox1Element.addEventListener('change', checkboxInfo);
checkbox2Element.addEventListener('change', checkboxInfo);
checkbox3Element.addEventListener('change', checkboxInfo);
checkbox4Element.addEventListener('change', checkboxInfo);
rangeElement.addEventListener('input', lengthPass);
generatePasswordElement.addEventListener('click', generatePass);
generatePasswordElement.disabled = true;
