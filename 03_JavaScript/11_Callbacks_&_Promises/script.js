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
  
  