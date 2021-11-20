// Write a function what counts the number of times a smaller string apprears into a larger string

function stringSearch(largerString, smallerString) {
  let count = 0

  for (let i = 0; i < largerString.length; i++) {
    for (let j = 0; j < smallerString.length; j++) {
      if (smallerString[j] !== largerString[i + j]) {
        break
      }

      if (j === smallerString.length - 1) {
        count++
      }
    }
  }
  return count
}

console.log(stringSearch('lorie lolm lola', 'lol'))

// 'lorie lolm lola', 'lol'
// i = 0, j = 0 ===>> j = l, i + j = l
// i = 0, j = 1 ===>> i = l, j = l
