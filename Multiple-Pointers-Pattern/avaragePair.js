// Given a sorted array of integers and a target as avarage write a function to determine if there is a pair of values in the array where the avarage of the pair equals the target avarage.

function averagePair(arr, num) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2

    if (avg === num) return [arr[start], arr[end]]
    else if (avg < num) start++
    else end--
  }
  return false
}

// avaragrPair([1, 3, 4, 5, 7], 6)  ==>> true

console.log(averagePair([1, 3, 4, 5, 7], 5))
