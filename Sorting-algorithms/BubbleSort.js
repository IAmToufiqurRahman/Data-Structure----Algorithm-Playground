// Bubble sort []

function bubbleSort(arr) {
  let noSwap // for optimization when no swap will happen this will help to detect

  for (let i = arr.length; i > 0; i--) {
    noSwap = true

    for (let j = 0; j < i - 1; j++) {
      console.log(i, j, arr, arr[j], arr[j + 1])

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]

        arr[j] = arr[j + 1]

        arr[j + 1] = temp

        noSwap = false
      }
    }
    if (noSwap) break
  }

  return arr
}

console.log(bubbleSort([2, -2, 7, 5, 0, 3]))
