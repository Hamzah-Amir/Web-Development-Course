# DOM Selection by Methods

This project demonstrates basic DOM (Document Object Model) selection and manipulation using JavaScript. It highlights how to select HTML elements using different DOM selection methods and apply inline CSS styles to them.

---

## File Structure

```
project-folder/
├── index.html
├── style.css *(styles embedded inside HTML in this example)*
└── script.js
```

> 📌 In your future projects, keep in mind to separate CSS into `style.css` if not embedded.

---

## Description

### HTML (`index.html`)

* Creates a `div` container with five child `div`s, each representing a box (Box1 to Box5).
* Each box has:

  * A class `box`
  * A unique `id` (`box1`, `box2`, ..., `box5`)
* The container has an ID `bg` and class `container`.

### CSS (Embedded in `<style>` tag for this example)

* Resets margin/padding for all elements.
* Flexbox layout for the container to center items.
* Styles each `.box` with border, spacing, height, and alignment.

### JavaScript (`script.js`)

* Selects all elements with class `box` using `getElementsByClassName`.
* Changes the background color of the 3rd box using `box[2]`.
* Uses `getElementById` to set specific background colors for each box using their IDs.
* Uses `querySelector` to change the background color of the `.container` div.

---

## What is DOM?

**DOM (Document Object Model)** is a programming interface for HTML and XML documents. It represents the page as a tree of objects that can be manipulated using JavaScript.

### Common Selection Methods:

* `getElementById("id")` - Selects a single element with the specified ID.
* `getElementsByClassName("class")` - Returns a collection of elements with the given class.
* `querySelector("selector")` - Returns the first element matching a CSS selector.

---

## Output Summary

* Each box gets a unique background color:

  * Box1: Royal Blue
  * Box2: Gray
  * Box3: Pink
  * Box4: Orange
  * Box5: Sky Blue
* Container background: Red

---

## Purpose

To practice and demonstrate the use of various DOM selection methods in JavaScript and apply style changes dynamically.
