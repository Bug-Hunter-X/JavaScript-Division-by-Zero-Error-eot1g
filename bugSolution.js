function foo(a, b) {
  if (b === 0) {
    return 0; // Handle division by zero
  } else {
    return a / b; 
  }
}
console.log(foo(10, 0)); // Returns 0
console.log(foo(10, 2)); // Returns 5