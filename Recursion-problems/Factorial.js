// Write a function that returns the factorial of a given number

function factorial(number) {
  if (number < 0) return 0
  if (number <= 1) return 1
  return number * factorial(number - 1)
}

console.log(factorial(5))
