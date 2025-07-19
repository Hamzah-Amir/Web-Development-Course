# JavaScript Callback Example

This is a simple demonstration of how **callback functions** work in JavaScript.

## What is a Callback?

A **callback** is a function passed as an argument to another function. It allows you to call one function from within another, often after some operation is complete.

## Example Code

```javascript
// This is the callback function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// This function takes another function as an argument (a callback)
function processUserInput(callback) {
  const name = "Alice";
  callback(name);  // Call the callback function
}

// Call processUserInput and pass greet as the callback
processUserInput(greet);

```

---

# JavaScript Promise Example

This section demonstrates how **Promises** work in JavaScript for handling asynchronous operations.

## What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. Promises allow you to write cleaner asynchronous code and handle success or error cases.

## Example Code

- Two promises (`prom1` and `prom2`) are created, each randomly resolving or rejecting after a delay.
- `Promise.all` is used to wait for both promises to resolve; if either fails, the error is caught.
- `Promise.allSettled` is also demonstrated, which waits for all promises to settle (either resolve or reject) and returns their results.

See `promise.js` for the full code example.
