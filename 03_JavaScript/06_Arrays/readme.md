# JavaScript Loops and Array Methods Tutorial

This project demonstrates common JavaScript looping techniques and array methods like `forEach`, `map`, `filter`, and `reduce`.

---

## 🔁 Basic For Loop

```js
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}
```

* Traditional `for` loop to iterate through array `a`.
* Access each element using `a[index]`.

---

## 🔄 forEach()

```js
a.forEach((value, index, arr) => {
    console.log(value, index, arr);
});
```

* `forEach` loops through the array.
* Gives access to `value`, `index`, and `original array`.

---

## 🧾 for...in (for Objects)

```js
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}
```

* `for...in` is used for iterating object keys.
* Checks if the key is directly on the object (not inherited).

---

## 🔁 for...of (for Arrays)

```js
for (const element of a) {
    console.log(element);
}
```

* `for...of` is used to iterate over array values directly.

---

## 🧠 map()

```js
let newArr = a.map((e, index, array) => {
    return e ** 3;
});
console.log(newArr);
```

* Creates a **new array** by applying a function to each element.
* Here, it returns the cube of each element.

---

## 🔍 filter()

```js
const greatenthenhundred = e => {
    if (e > 100) {
        return true;
    }
    return false;
};
console.log(newArr.filter(greatenthenhundred));
```

* Filters elements in `newArr` that are greater than 100.
* Returns a new array.

---

## ➗ reduce()

```js
let arr2 = [1,2,3,4,5,6];
const red = (p, q) => {
    return p * q;
};
console.log(arr2.reduce(red));
```

* `reduce()` applies a function cumulatively.
* Here, it multiplies all elements → returns product.

---

## ✅ Summary

This script covers various essential JavaScript loop and array methods:

* `for`, `forEach`, `for...in`, `for...of`
* `map`, `filter`, `reduce`

Useful for mastering how to **iterate and manipulate data** efficiently in JavaScript.
