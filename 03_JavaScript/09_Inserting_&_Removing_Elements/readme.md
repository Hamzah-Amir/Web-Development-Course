# DOM Element Manipulation - JavaScript Tutorial

This project demonstrates various methods of **selecting**, **modifying**, **inserting**, and **removing** elements in the Document Object Model (DOM) using JavaScript.

### File Structure

* `index.html` – contains the HTML structure
* `style.css` – not used in this specific example (styles are inline or embedded)
* `script.js` – contains JavaScript DOM manipulation code

### Key Concepts Demonstrated

#### 1. **Element Selection & Content Access**

```js
// Select first element with class 'box'
document.querySelector(".box").innerHTML
// Gets inner HTML content
document.querySelector(".box").innerText
// Gets visible text
```

#### 2. **Element Attributes**

```js
document.querySelector(".box").outerHTML // Full HTML of element
document.querySelector(".box").tagName // Element tag name (e.g., DIV)
document.querySelector(".box").hasAttribute("style") // true/false
document.querySelector(".box").getAttribute("style")
document.querySelector(".box").setAttribute("style","font-size: 20px")
document.querySelector(".box").removeAttribute("style")
```

#### 3. **Creating and Inserting New Elements**

```js
let div = document.createElement("div")
div.setAttribute("class", "box2")
div.innerHTML = "I have been created by <b>JavaScript DOM</b>"
document.querySelector(".container").append(div) // Adds element inside container at the end
```

Other placement options (commented in code):

* `.prepend()` – insert at beginning
* `.before()` – insert before container
* `.after()` – insert after container
* `.replaceWith()` – replace entire container
* `.remove()` – remove element

#### 4. **Working with Classes**

```js
document.querySelector(".container").className // returns class as string
document.querySelector(".container").classList // returns DOMTokenList
```

Class operations:

```js
document.querySelector(".container").classList.add("Hamza")
document.querySelector(".container").classList.remove("box1")
document.querySelector(".container").classList.toggle("box1")
```

### Preview

Initial content:

```html
<div class="container">
  <div class="box box1 border-box" style="font-size: 35px;">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit...
  </div>
</div>
```

JavaScript dynamically updates this by modifying content, adding a new div, and changing class/style attributes.

---

### What is the DOM?

**DOM (Document Object Model)** is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM connects web pages to scripts or programming languages (like JavaScript).

In this project, we interact with DOM using JavaScript to dynamically manipulate the content and structure of a webpage.
