// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to that function is located. If the value was not found return -1

// Solve using divide and conquer pattern with time complexity of O(log(N))

function search(arr, value) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let currentElement = arr[middle]

    if (currentElement < value) {
      left = middle + 1
    } else if (currentElement > value) {
      right = middle - 1
    } else {
      return middle
    }
  }

  return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)) // 7
