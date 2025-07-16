# Business Name Generator (JavaScript)

This simple JavaScript project generates a **random business name** using three word categories: adjectives, shop types, and suffixes.

## 🧠 Logic

* Three objects store sets of words:

  * `adj`: Adjectives (e.g., Crazy, Amazing, Fire)
  * `shop`: Business types (e.g., Engine, Garments, Foods)
  * `word`: Endings (e.g., Bros, Limited, Hub)

* The function `Business_name_generator()` generates:

  * One random word from each object
  * Combines them using a **template literal**: `${first_name} ${second_name} ${third_name}`

## 🔍 Key Code Highlights

```js
let a = Math.floor(Math.random() * 3) + 1;
```

* Generates a random number from **1 to 3**.
* `Math.random()` gives a float from 0 to <1.
* Multiplying by 3 and adding 1 gives values: 1, 2, or 3.

```js
const business_name = `${first_name} ${second_name} ${third_name}`;
```

* Combines the selected words using **template literals** with `${}` inside backticks.

## 🏁 Example Output

```
Crazy Engine Bros
Amazing Garments Hub
Fire Foods Limited
```

Each time you run the code, it randomly picks one word from each category to create a unique and fun business name.

## ✅ Use

* Run in browser or Node.js using:

```bash
node index.js
```

Great for learning **random number generation**, **objects**, and **string manipulation** in JavaScript.
