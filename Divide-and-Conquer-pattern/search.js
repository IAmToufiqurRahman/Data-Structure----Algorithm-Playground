// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to that function is located. If the value was not found return -1

// Solve using divide and conquer pattern with time complexity of O(log(N))

function search(arr, value) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle]

    if (currentElement < value) {
      min = middle + 1
    } else if (currentElement > value) {
      max = middle - 1
    } else {
      return middle
    }
  }

  return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))
