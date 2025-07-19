# Hacker Terminal Simulation

This project simulates a fake hacker terminal using JavaScript, styled with a dark green theme and delayed message output to mimic hacking animations.

## Files

* `index.html`: Contains the basic structure and embedded styling.
* `script.js`: Includes the logic for message delays, dynamic typing effects, and simulated actions.

## Features

### 1. **Green Terminal Look**

```css
body {
  background-color: rgb(9, 106, 9);
  color: white;
  font-size: 20px;
}
```

### 2. **Random Delay Simulation**

Random delay between messages (1–7 seconds):

```js
const randomDelay = () => {
  return new Promise(resolve => {
    timeout = 1 + 6 * Math.random();
    setTimeout(resolve, timeout * 1000);
  });
};
```

### 3. **Dynamic Message Printing**

Messages are shown with random delays and animated dots:

```js
async function main() {
  let t = setInterval(() => {...}, 200);

  let text = [...];
  for (const item of text) {
    await additem(item);
  }

  await randomDelay();
  clearInterval(t);
}
```

### 4. **Message List**

```js
let text = [
  "Initialized Hacking now reading your data",
  "Reading Your Files",
  "Password Files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];
```

### 5. **Console Logging**

Logs each `timeout` duration to console (for debug/testing).

## How to Use

Open `index.html` in a browser. Messages will appear one by one, with delays and animated dots, creating a fake hacking animation.

---

Great for fun terminal effects or pranks. Not harmful and purely educational/visual.
