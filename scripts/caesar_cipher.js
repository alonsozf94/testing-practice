function cypherChar(char, key) {
  let newCode = char.charCodeAt();
  const alphabetLength = 26;
  if (newCode >= 65 && newCode <= 90 || newCode >= 98 && newCode <= 122) {
    newCode += key;
    if (newCode > 90 && char.charCodeAt() <= 90 || newCode > 122)
      newCode -= alphabetLength;
  }
  return String.fromCharCode(newCode);
}

function caesarCypher(string, key) {
  let cypheredString = '';
  [...string].forEach((c) => {
    cypheredString += cypherChar(c, key);
  })
  return cypheredString;
}

module.exports = caesarCypher;