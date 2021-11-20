// Write a function that accepts an array and a value, loop through the array and check if the current index is equal to the value if it is found return the index, otherwise return -1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([1, 3, 2, 4, 1, 3, 7, 5, 6], 11)) // 7
