# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: division by zero.  The `foo` function attempts to divide two numbers but doesn't properly handle the case where the denominator is zero, leading to an error. The solution provides a corrected version of the function that gracefully handles this edge case.  This is a simple illustration of the importance of robust error handling in JavaScript applications.

## Bug

The `bug.js` file contains the erroneous implementation of the function.  Running this code will result in an error because the function does not correctly handle division by zero.

## Solution

The `bugSolution.js` file shows the corrected function.  This implementation adds a check to prevent division by zero and gracefully returns a specified value (in this case 0) or uses a try-catch block to prevent unexpected errors.