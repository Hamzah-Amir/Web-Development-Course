# DOM Manipulation Tutorial - JavaScript

## 📁 Project Structure

```
/your-project-folder
|-- index.html
|-- script.js
```

## 📄 index.html

This file contains the basic HTML structure with a `.container` `<div>` that wraps four child `<div>`s having the class `box`. Each box has some default height, width, border, and spacing applied using CSS.

### Key Elements:

* `.box`: styled divs with text content (Box1 - Box4)
* `<script src="script.js">`: links to the external JavaScript file that manipulates the DOM.

## 📄 script.js

This file demonstrates **DOM manipulation** using JavaScript.

### What it does:

1. Logs to console that the script has started.
2. Logs the children of the first child of the `<body>` (i.e., the `.container` div's children).
3. Applies various style changes to the boxes using DOM traversal:

   * Changes the background color of `.container` using `parentElement`
   * Applies different background colors to specific boxes
   * Adds padding and margin to siblings of selected elements

### Example Code Summary:

```js
console.log(document.body.firstElementChild.children); // Logs all boxes

// Change background colors
Box1 -> gray
.container (parent of Box1) -> pink
Box2 -> gold
Box3 -> green
Box4 -> yellow

// Add spacing
Box1 (previous of Box2) -> padding: 10px
Box3 (next of Box2) -> margin: 10px
```

## 💡 What is the DOM?

DOM stands for **Document Object Model**.
It is the structured representation of the HTML document as a tree of objects that JavaScript can interact with.

* Every HTML element becomes a **node** in this tree.
* JavaScript can **select**, **modify**, **add**, or **remove** these nodes dynamically.

### Example DOM Tree:

```
<body>
  └── <div class="container">
        ├── <div class="box">Box1</div>
        ├── <div class="box">Box2</div>
        ├── <div class="box">Box3</div>
        └── <div class="box">Box4</div>
```

### Common DOM Methods:

* `document.querySelector()` / `querySelectorAll()`
* `document.getElementById()` / `getElementsByClassName()`
* `.style` for CSS manipulation
* `.parentElement`, `.children`, `.nextElementSibling`, `.previousElementSibling` for traversal

## ✅ Output

After script execution, each box will have:

* **Different background colors**
* **Adjusted padding/margin**
* The container will have a **pink background**

---

This simple project teaches how to access and manipulate HTML elements dynamically using vanilla JavaScript DOM techniques.
