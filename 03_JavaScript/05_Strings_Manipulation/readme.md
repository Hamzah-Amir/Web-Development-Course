# JavaScript String Manipulation Tutorial

This project demonstrates various string operations in JavaScript including indexing, methods, template literals, and more.

## 🔹 Indexing & Length

```js
let a = "Hamza";
console.log(a[0]); // 'H'
...
console.log(a[5]); // undefined (out of bounds)
console.log(a.length); // 5
```

* Strings are zero-indexed.
* Access characters using bracket notation.
* `.length` gives the total number of characters.

## 🔹 Template Literals

```js
let real_name = "Hamza";
let age = 18;
console.log(`My name is ${real_name}, I am ${age} old`);
```

* Use backticks (`` ` ``) and `${}` to insert variables into strings.

## 🔹 String Methods

```js
let b = "hello";
console.log(b.toUpperCase()); // 'HELLO'
console.log(b.toLowerCase()); // 'hello'
console.log(b.length);        // 5
```

* `.toUpperCase()` and `.toLowerCase()` change letter cases.
* `.length` gives the string size.

## 🔹 Slice & Replace

```js
let c = "Hamza Amir";
console.log(c.slice(0, 5));   // 'Hamza'
console.log(c.slice(0));      // Full string

c = c.replace("Amir", "Ahmed");
console.log(c);               // 'Hamza Ahmed'
```

* `.slice(start, end)` extracts part of the string.
* `.replace()` substitutes the matched part.

## 🔹 Concatenation, Trim, and Character Access

```js
console.log(c.concat(" Amir")); // 'Hamza Ahmed Amir'
console.log(c.trim());          // Removes leading/trailing spaces
console.log(c.charAt(8));       // Character at index 8
console.log(c.indexOf("Ahmed"));// Index of substring
```

* `.concat()` joins strings.
* `.trim()` removes whitespace.
* `.charAt(index)` and `.indexOf(value)` are useful for locating characters/substrings.

---

This script is a good intro to how string manipulation works in JavaScript. Useful for beginners practicing variables, string methods, and template literals.
