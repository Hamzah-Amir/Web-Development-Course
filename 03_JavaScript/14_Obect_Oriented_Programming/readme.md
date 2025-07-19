# Object Oriented Programming in JavaScript

This project demonstrates basic Object Oriented Programming (OOP) concepts in JavaScript using classes, inheritance, and method overriding.

## Files

* `index.html`: Basic HTML file that includes the JavaScript file.
* `script.js`: Contains the main JavaScript code implementing OOP concepts.

## Concepts Demonstrated

### 1. **Prototypal Inheritance (Commented)**

```js
// let animal = { eats: true }
// let rabbit = { jumps: true }
// rabbit.__proto__ = animal
```

### 2. **Class Declaration**

Defines a base class `Animal` with properties and methods:

```js
class Animal {
  constructor(name, type) {...}
  eat() {...}
  jump() {...}
}
```

### 3. **Inheritance with `extends` and `super()`**

Defines a derived class `Lion`:

```js
class lion extends Animal {
  constructor(name, type) {
    super(name, type);
  }
  roar() {...}
  eat() {...} // Method overriding
}
```

### 4. **Method Overriding**

`Lion` overrides the `eat()` method of `Animal` to provide a custom message.

### 5. **Object Creation and Method Calls**

```js
let a = new Animal("Tommy", "Dog");
a.eat();
a.jump();

let l = new lion("Shera", "Lion");
l.roar();
l.jump();
l.eat();
```

## Output

Logs object creation, method calls, and demonstrates inheritance and method overriding.

## Usage

Open `index.html` in a browser to see the console output.

---

This example is useful for beginners to understand how JavaScript handles classes and inheritance in ES6.
