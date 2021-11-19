// Write a function that take a number n as input and returns the n th fibonacci number

function fib(n) {
  if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(4))

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……
