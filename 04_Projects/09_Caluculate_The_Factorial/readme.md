# Factorial Function in JavaScript

This project contains a simple JavaScript function that calculates the **factorial** of a given number using a `for` loop.

---

## Code Explanation

```javascript
function factorial(a) {
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result += i;
    }
    return result;
}

console.log(factorial(3))
```

### What is it doing?

This code defines a function called `factorial` that takes a number `a` as input and calculates the factorial of that number.

### Breakdown:

* `let result = 1;`: Initializes the result variable to store the final value.
* `for (let i = 2; i <= a; i++)`: A loop from 2 up to `a`.
* `result += i;`: Adds `i` to the result (❌ this is incorrect for a factorial).
* `return result;`: Returns the final value.

---

## Issue in Code

The function **adds** instead of **multiplies**, which means this does not compute the actual factorial.

### Correct Version:

```javascript
function factorial(a) {
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;
}
```

---

## How to Run

1. Save the code in a file named `index.js`
2. Run using Node.js:

```bash
node index.js
```

---

## Example Output

```js
console.log(factorial(3)); // Output: 6
```
