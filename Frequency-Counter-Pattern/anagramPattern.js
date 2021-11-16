// Given two strings, write a function to determine if the second string is an anagram of the first. Anagram examole :- cinema => iceman

// in this case we only consider lowecase, one word inputs

function validAnagram(firstString, secondString) {
  // let validAnagram('cinema', 'iceman')
  if (firstString.length !== secondString.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < firstString.length; i++) {
    //  lookup = {c: 1, i: 1, n: 1, e: 1, m: 1, a: 1}
    let firstStringLetter = firstString[i]

    lookup[firstStringLetter] ? (lookup[firstStringLetter] += 1) : (lookup[firstStringLetter] = 1)

    console.log(lookup)
  }

  for (let i = 0; i < secondString.length; i++) {
    let secondStringLetter = secondString[i]

    if (!lookup[secondStringLetter]) {
      return false
    } else {
      lookup[secondStringLetter] -= 1
    }

    console.log(lookup)
  }

  return true
}

console.log(validAnagram('aaa', 'aa1'))
