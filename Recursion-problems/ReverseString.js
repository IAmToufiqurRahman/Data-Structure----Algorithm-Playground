// Write a program that takes a string as input and returns the string reversed

function reverse(str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

console.log(reverse('madama')) // nakna
