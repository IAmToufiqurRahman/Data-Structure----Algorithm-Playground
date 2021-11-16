// Problem: Write a function which takes in a string and returns counts of each character in string

function charCount(str) {
  // return an object with keys that are alphanumeric characters in the str, values should be the counts for those characters
  let obj = {}
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0) // charCodeAt: The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.Returns the Unicode value of the character at the specified location.

  if (
    !(code > 47 && code < 58) && // numeric values: (0~9)
    !(code > 64 && code < 91) && // uppercase (A~Z)
    !(code > 96 && code < 123) // lowercase (a~z)
  ) {
    return false
  }

  return true
}

console.log(charCount('HeloO heLOo!!!!'))
