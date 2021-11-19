// Write a function that takes an array of integers as an input and return the odds numbers in that array

function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))

  return newArr
}

// collectOddValues([1, 2, 4, 5, 6, 7, 8, 9])  ==>> [ 1, 5, 7, 9 ]

console.log(collectOddValues([1, 2, 4, 5, 6, 7, 8, 9]))
