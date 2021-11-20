// Write a function that accepts a sorted array and a value, loop through the array and check if the current index is equal to the value if it is found return the index, otherwise return -1

function binarySearch(arr, value) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  while (start <= end && arr[middle] !== value) {
    if (arr[middle] < value) start = middle + 1

    if (arr[middle] > value) end = middle - 1

    middle = Math.floor((start + end) / 2)
  }

  return arr[middle] === value ? middle : -1
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 17, 20], 17))

// [2, 5, 6, 9, 13, 15, 17, 20], 5
// 1st iteration: middle = 9
