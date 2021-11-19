// Write a function that takes base ar exponent as argument and returns the result

function power(base, exponent) {
  if (exponent === 0) return 1

  return base * power(base, exponent - 1)
}

console.log(power(2, 4)) // 16
