// Selection Sort []

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }

    if (i !== lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}

console.log(selectionSort([34, 22, 10, 19, 17]))

//  i   j   lowest  condition new lowest
//  0   1   0       true        1
//  0   2   1       true        2
//  0   3   2       false
//  0   4   2       false
//  first iteration done now swap i and new lowest
