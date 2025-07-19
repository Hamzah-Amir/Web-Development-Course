# JavaScript Events

## Overview
This module demonstrates fundamental concepts of JavaScript event handling, including event listeners, event propagation, and timing functions.

## Files
- `index.html` - HTML structure with nested elements for event demonstration
- `script.js` - JavaScript code demonstrating various event handling concepts

## Concepts Covered

### 1. Event Listeners
- Using `addEventListener()` to attach event handlers to DOM elements
- Handling click events on different elements

### 2. Event Propagation
- **Event Bubbling**: Events bubble up from the target element to its parent elements
- **Event Capturing**: Events can be captured on the way down to the target element
- **stopPropagation()**: Prevents event from bubbling up to parent elements

### 3. Event Object
- Accessing the event object (`e`) in event handlers
- Using event object properties and methods

### 4. Timing Functions
- `setInterval()`: Executes a function repeatedly at specified intervals

## Code Structure

### HTML Structure
```html
<div class="container">
    <div class="childcontainer">
        <div class="child">
            I am a child inside two parents
            <button>Change Content</button>
        </div>
    </div>
</div>
```

### JavaScript Event Handlers

#### Child Element Event
```javascript
document.querySelector(".child").addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("child is clicked")
})
```
- Listens for clicks on the innermost child element
- Uses `stopPropagation()` to prevent event bubbling

#### Child Container Event
```javascript
document.querySelector(".childcontainer").addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("You clicked Child Container")
})
```
- Listens for clicks on the middle container
- Also prevents event propagation

#### Container Event
```javascript
document.querySelector(".container").addEventListener("click", (e) =>{
    // e.stopPropagation() // Commented out
    alert("You clicked Container")
})
```
- Listens for clicks on the outermost container
- `stopPropagation()` is commented out, allowing event bubbling

#### Interval Function
```javascript
setInterval(() => {
    alert("Running")
}, 3000);
```
- Executes an alert every 3 seconds (3000 milliseconds)

## Key Learning Points

1. **Event Bubbling**: When you click on the child element, the event bubbles up through parent elements unless stopped
2. **stopPropagation()**: Prevents events from bubbling up to parent elements
3. **Event Delegation**: Understanding how events flow through the DOM tree
4. **Timing Functions**: Using `setInterval()` for recurring actions

## How to Test

1. Open `index.html` in a web browser
2. Click on different elements to observe event behavior:
   - Click on the child element (innermost div)
   - Click on the child container (middle div)
   - Click on the container (outermost div)
3. Notice how the `setInterval()` function shows alerts every 3 seconds

## Expected Behavior

- Clicking the child element shows "child is clicked" (event propagation stopped)
- Clicking the child container shows "You clicked Child Container" (event propagation stopped)
- Clicking the container shows "You clicked Container"
- An alert "Running" appears every 3 seconds automatically

## Browser Compatibility
This code works in all modern browsers that support ES6+ features and the DOM API. 