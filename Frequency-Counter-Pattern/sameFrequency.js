//Write a functions called sameFrequency.  Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(numOne, numTwo) {
  let strNumOne = numOne.toString()
  let strNumTwo = numTwo.toString()
  if (strNumOne.length !== strNumTwo.length) return false

  let countNumOne = {}
  let countNumTwo = {}

  for (let i = 0; i < strNumOne.length; i++) {
    countNumOne[strNumOne[i]] = (countNumOne[strNumOne[i]] || 0) + 1
  }

  for (let j = 0; j < strNumOne.length; j++) {
    countNumTwo[strNumTwo[j]] = (countNumTwo[strNumTwo[j]] || 0) + 1
  }

  for (let key in countNumOne) {
    if (countNumOne[key] !== countNumTwo[key]) return false
  }

  return true
}

//sameFrequency(34215, 13524) returns true
//sameFrequency(34, 14)  returns false

console.log(sameFrequency(34215, 13524))
