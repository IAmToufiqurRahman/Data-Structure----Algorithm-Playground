// Write a function that takes an array of integers as an input and return the odds numbers in that array

function collectOddValues(arr) {
  let newArr = []

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return
    }

    if (helperInput[0] % 2 !== 0) {
      newArr.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return newArr
}

// collectOddValues([1, 2, 4, 5, 6, 7, 8, 9])  ==>> [5. 7]

console.log(collectOddValues([1, 2, 4, 5, 6, 7, 8, 9]))
